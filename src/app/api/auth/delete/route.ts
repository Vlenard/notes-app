
import { prisma } from "@/prismaClient";
import CryptoJS from "crypto-js";
import { NextRequest, NextResponse } from "next/server";

type RequestData = {
    authKey: string;
};

export async function POST(req: NextRequest) {

    const data: RequestData = await req.json();

    console.log("api: " + data.authKey);
    
    //@ts-ignore
    const auth: string[] = CryptoJS.AES.decrypt(data.authKey, process.env.USER_SECRET).toString(CryptoJS.enc.Utf8).split(";");

    const user = await prisma.user.findUnique({
        where: {
            email: auth[0]
        }
    });

    if(!user) return NextResponse.json({message: "User didn't find", success: false});
 
    if(user.password === auth[1]) {
        const deleteNotes = prisma.note.deleteMany({
            where: {
                authorId: user.id
            }
        });

        const deleteUser = prisma.user.delete({
            where: {
                id: user.id
            }
        });

        await prisma.$transaction([deleteNotes, deleteUser]);

        return NextResponse.json({message: "Profile deleted", success: true});
    }

    return NextResponse.json({message: "Auth faild", success: false});
};