import { prisma } from "@/prismaClient";
import { AES } from "crypto-js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const data = await req.json();
    console.log(data);
    
    //@ts-ignore 
    //[0] email | [1] password 
    const auth: string = AES.decrypt(data.authKey, process.env.NOTES_SECRET).toString().split(";");

    const user = await prisma.user.findUnique({
        where: {
            email: auth[0],
        }
    });

    if(user?.password !== auth[1]) return NextResponse.json({success: false});

    await prisma.note.delete({
        where: {
            id: data.noteId
        }
    });

    return NextResponse.json({success: true});
}