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
        lang: string
    }
};

export default async function Layout(props: Props) {

    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);
    const user = await getUser(session?.user?.email as string);

    if (!session) {
        redirect(`/${props.params.lang}`);
    }

    return (
        <>
            <Navbar title={dict.title}>
                <Link className="nav-link" href={`${props.params.lang}/notes/new`}>{dict.write}</Link>
                <Link className="nav-link" href={`${props.params.lang}/notes#myNotes`} scroll={false}>{dict.myNotes}</Link>
                <Link className="nav-link" href={`${props.params.lang}/notes/profile`}>{dict.profile}</Link>
                {user?.admin && <Link className="nav-link" href={`${props.params.lang}/notes/admin`}>Admin</Link>}
                <SignOutButton>{dict.signout}</SignOutButton>
            </Navbar>

            <div className="dark:bg-darkGrey pb-10">
                {props.children}
            </div>
        </>
    );
}