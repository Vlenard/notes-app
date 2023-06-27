
import { prisma } from "@/prismaClient";
import CryptoJS from "crypto-js";
import { NextRequest, NextResponse } from "next/server";

type RequestData = {
    authKey: string;
    target?: string;
};

export async function POST(req: NextRequest) {

    const data: RequestData = await req.json();
    
    //@ts-ignore
    const auth: string[] = CryptoJS.AES.decrypt(data.authKey, process.env.USER_SECRET).toString(CryptoJS.enc.Utf8).split(";");
    
    const user = await prisma.user.findUnique({
        where: {
            email: auth[0]
        }
    });

    if(!user) return NextResponse.json({message: "Authentication faild", success: false});
 
    if(user.password === auth[1]) {

        let selectedUserId = user.id;
        

        if(user.admin && data.target){
            const targetUser = await prisma.user.findUnique({
                where: {
                    email: data.target
                }
            });

            if(!targetUser) 
                return NextResponse.json({message: "Can't delete the user, because it doesn't exits", success: false});

            selectedUserId = targetUser?.id as number;
        }

        const deleteNotes = prisma.note.deleteMany({
            where: {
                authorId: selectedUserId
            }
        });

        const deleteUser = prisma.user.delete({
            where: {
                id: selectedUserId
            }
        });

        await prisma.$transaction([deleteNotes, deleteUser]);

        return NextResponse.json({message: "Profile deleted", success: true});
    }

    return NextResponse.json({message: "Auth faild", success: false});
};