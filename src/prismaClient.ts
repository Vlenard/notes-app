import { PrismaClient, User } from '@prisma/client'
import { Session } from 'next-auth';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const getUser = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    return user;
};

export const getNotes = async (user: User) => {

    const notes = await prisma.note.findMany({
        where: {
            authorId: user.id
        }
    });

    return notes;
};