import { prisma } from "@/prismaClient";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    //@ts-ignore
    const data = await req.json();

    const user = await prisma.user.update({
        data: {
            admin: true
        },
        where: {
            email: data.email
        }
    });

    return NextResponse.json(user);
};