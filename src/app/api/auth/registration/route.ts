import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const data = await req.json();
    const prisma = new PrismaClient();

    const newUser = await prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
            name: data.name
        }
    });

    return NextResponse.json(newUser);
};