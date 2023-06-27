import { prisma } from "@/prismaClient";
import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

type RequestData = {
    authKey: string;
    target?: string;
};

export async function POST(req: Request) {

    const data: RequestData = await req.json();
    
    //@ts-ignore
    const auth: string[] = CryptoJS.AES.decrypt(data.authKey, process.env.USER_SECRET).toString(CryptoJS.enc.Utf8).split(";");
    
    const user = await prisma.user.findUnique({
        where: {
            email: auth[0]
        }
    });

    if(!user) return NextResponse.json({message: "Authentication faild", success: false});
 
    if(user.password === auth[1] && user.admin){

        try {
            const updatedUser = await prisma.user.update({
                where: {
                    email: data.target
                },
                data: {
                    admin: true
                }
            });

            return NextResponse.json({message: `${updatedUser.name}=admin`, success: true});
        } catch (error) {
            return NextResponse.json({message: "User didn't find", success: false});
        }

    }

    return NextResponse.json(user);
};