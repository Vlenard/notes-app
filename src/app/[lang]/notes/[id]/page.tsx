import Editor from "@/components/inputs/Editor";
import { getDictionary } from "../../dictionaries";
import { Note } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cache } from "react";
import { prisma } from "@/prismaClient";

type Props = {
    params: {
        lang: string;
        id: string;
    };
};

const getNote = async (id: string): Promise<Note | null> => {
    if(id === "new") return null;

    const note = await prisma.note.findUnique({
        where: {
            id: parseFloat(id)
        }
    });

    return note;
};

const getAutherId = cache(async (email: string) => {
    const autherId = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true
        }
    });

    return autherId?.id;
});

export default async function page(props: Props) {

    const session = await getServerSession(authOptions);
    const dict = await getDictionary(props.params.lang);
    const note = await getNote(props.params.id);
    const authorId = await getAutherId(session?.user?.email as string);

    return (
        <div className="flex flex-col w-full min-h-screen pt-24 md:pt-20 px-5">
            <Editor dict={dict}  note={note} autherId={authorId as number}/>
        </div>
    );
};