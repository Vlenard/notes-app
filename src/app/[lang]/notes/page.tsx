import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { Note, PrismaClient } from "@prisma/client";
import NotesIndex from "@/components/notes/NotesIndex";

type Props = {
    params: {
        lang: string;
    }
}

export const revalidate = 0;

const prisma = new PrismaClient();

const getNotes = async (session: Session) => {

    const user = await prisma.user.findUnique({
        where: {
            email: session.user?.email as string
        }
    });

    const notes = await prisma.note.findMany({
        where: {
            authorId: user?.id
        }
    });

    return notes;
};

export default async function Page(props: Props) {

    const session = await getServerSession(authOptions);
    const dict = await getDictionary(props.params.lang);

    const notes: Array<Note> = await getNotes(session as Session);

    return (
        <>
            <div className="w-screen h-screen flex flex-col space-y-10 justify-center items-center">
                <p className="font-hand text-8xl dark:text-lightGrey text-center">Hello {session?.user?.name}</p>
                <Link className="nav-link text-4xl px-10 py-5 rounded-full" href={`/${props.params.lang}/notes#myNotes`} scroll={false}>
                    {dict.myNotes}
                </Link>
            </div>
            
            <div id="myNotes" className="pt-24 md:pt-20 grid gap-10 md:grid-cols-2 grid-cols-1">
                {
                    notes.map((item, i) => (
                        <NotesIndex note={item} key={i}/>
                    ))
                }
            </div> 
        </>
    );
}