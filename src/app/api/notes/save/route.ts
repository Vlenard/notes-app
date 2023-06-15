import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const data = await req.json();
    const prisma = new PrismaClient();

    if(data.id){
        const note = await prisma.note.update({
            where: {
                id: data.id
            },
            data: {
                title: data.title,
                content: data.content,
            }
        });

        return NextResponse.json({success: note ? true : false});
    }else{

        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });
        

        const note = await prisma.note.create({
            data: {
                title: data.title,
                content: data.content,
                authorId: user?.id as number
            }
        });

        return NextResponse.json({success: note ? true : false});
    }
}