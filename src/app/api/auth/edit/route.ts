import { prisma } from "@/prismaClient";
import { NextRequest, NextResponse } from "next/server";

type RequestData = {
    email: string;
    password: string;
    edit: {
        email?: string;
        password?: string;
        name?: string;
    }
};

export async function POST(req: NextRequest) {

    const data: RequestData = await req.json();

    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    });

    if(!user || user.password !== data.password) return NextResponse.json({message: "User didn't find or wrong password", success: false});

    try {
        await prisma.user.update({
            where: {
                email: data.email
            }, 
            data: data.edit
        });

        return NextResponse.json({message: "User updated", success: true});
    } catch (err) {
        return NextResponse.json({message: "Faild to update", success: false});        
    }

};