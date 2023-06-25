import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { Note, User } from "@prisma/client";
import NotesIndex from "@/components/notes/NotesIndex";
import { getNotes, getUser } from "@/prismaClient";
import { AES } from "crypto-js";

type Props = {
    params: {
        lang: string;
    }
}

export default async function Page(props: Props) {

    const session = await getServerSession(authOptions);
    const dict = await getDictionary(props.params.lang);
    const user = await getUser(session?.user?.email as string);
    const notes: Array<Note> = await getNotes(user as User);

    //@ts-ignore
    const hmacDigest = AES.encrypt(`${user?.email as string};${user?.password as string}`, process.env.NOTES_SECRET).toString();

    return (
        <>
            <div className="w-screen h-screen flex flex-col space-y-10 justify-center items-center">
                <p className="font-hand text-8xl dark:text-lightGrey text-center">Hello {user?.name}</p>
                <Link className="nav-link text-4xl px-10 py-5 rounded-full" href={`/${props.params.lang}/notes#myNotes`} scroll={false}>
                    {dict.myNotes}
                </Link>
            </div>

            <div id="myNotes" className="pt-24 md:pt-20 grid gap-10 md:grid-cols-2 grid-cols-1">
                {
                    notes.map((item, i) => (
                        <NotesIndex dict={dict} authKey={hmacDigest} note={item} key={i} />
                    ))
                }
            </div>
        </>
    );
}