import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const prisma = new PrismaClient();


    return NextResponse.json(`{"success": true}`);
};