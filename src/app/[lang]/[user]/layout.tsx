import { getServerSession } from "next-auth";
import { getDictionary } from "../dictionaries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import React from "react";
import Navbar from "@/components/nav/Navbar";
import SignOutButton from "@/components/auth/buttons/SignOutButton";
import Link from "next/link";
import { getUser } from "@/prismaClient";

type Props = {
    children: React.ReactNode;
    params: {
        lang: string;
        user: string;
    }
};

export const revalidate = 0;

export default async function Layout(props: Props) {

    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect(`/${props.params.lang}`);
    }

    const user = await getUser(session?.user?.email as string);

    return (
        <>
            <Navbar title={dict.title} dict={dict}>
                <Link className="nav-link" href={`${props.params.lang}/${props.params.user}/new`}>{dict.write}</Link>
                <Link className="nav-link" href={`${props.params.lang}/${props.params.user}#myNotes`} scroll={false}>{dict.myNotes}</Link>
                <Link className="nav-link" href={`${props.params.lang}/${props.params.user}/profile`}>{dict.profile}</Link>
                {user?.admin && <Link className="nav-link" href={`${props.params.lang}/notes/admin`}>Admin</Link>}
                <SignOutButton>{dict.signout}</SignOutButton>
            </Navbar>

            <div className="dark:bg-darkGrey pb-10">
                {props.children}
            </div>
        </>
    );
}