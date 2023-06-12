import { getServerSession } from "next-auth";
import { getDictionary } from "../dictionaries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import React from "react";
import Navbar from "@/components/nav/Navbar";
import SignOutButton from "@/components/auth/buttons/SignOutButton";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    params: {
        lang: string
    }
};

export default async function Layout(props: Props) {

    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);

    if (session === null) {
        redirect(`/${props.params.lang}`);
    }

    return (
        <>
            <Navbar title={dict.title}>
                <Link className="nav-link" href={`${props.params.lang}/registration`}>{dict.write}</Link>
                <Link className="nav-link" href={`${props.params.lang}/notes#myNotes`} scroll={false}>{dict.myNotes}</Link>
                <Link className="nav-link" href={`${props.params.lang}/registration`}>{dict.profile}</Link>
                <SignOutButton>{dict.signout}</SignOutButton>
            </Navbar>

            <div className="dark:bg-darkGrey">
                {props.children}
            </div>
        </>
    );
}