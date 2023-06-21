import { prisma } from "@/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const data: any = await req.json();
    let res = null;

    if(data.id){
        res = await prisma.note.update({
            where: {
                id: data.id
            },
            data: {
                title: data.title,
                content: data.content,
            }
        });
    }else{
        res = await prisma.user.update({
            where: {
                id: data.autherId
            },
            data: {
                notes: {
                    create: {
                        title: data.title,
                        content: data.content
                    }
                }
            },
            include: {
                notes: true
            }
        });
    }

    return NextResponse.json(res);
}