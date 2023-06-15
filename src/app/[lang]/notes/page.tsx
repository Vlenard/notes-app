import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import { getDictionary } from "../dictionaries";

type Props = {
    params: {
        lang: string;
    }
}

const getNotes = async (session: Session) => {

};

export default async function Page(props: Props) {

    const session = await getServerSession(authOptions);
    const dict = await getDictionary(props.params.lang);

    const works = await getNotes(session as Session);

    return (
        <>
            <div className="w-screen h-screen flex flex-col space-y-10 justify-center items-center">
                <p className="font-hand text-8xl dark:text-lightGrey text-center">Hello {session?.user?.name}</p>
                <Link className="nav-link text-4xl px-10 py-5 rounded-full" href={`/${props.params.lang}/notes#myNotes`} scroll={false}>
                    {dict.myNotes}
                </Link>
            </div>
            
            <div id="myNotes" className="pt-24 md:pt-20">
                <Suspense fallback={<Loading />}>
                    
                </Suspense>
            </div>
        </>
    );
}