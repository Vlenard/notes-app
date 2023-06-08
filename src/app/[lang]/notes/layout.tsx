import { getServerSession } from "next-auth";
import { getDictionary } from "../dictionaries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import React from "react";
import Navbar from "@/components/nav/Navbar";
import SignOutButton from "@/components/auth/buttons/SignOutButton";

type Props = {
    children: React.ReactNode;
    params: {
        lang: string
    }
};

export default async function Layout(props: Props) {
    
    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);

    if(session === null){
        redirect("/");
    }

    return (
        <>
            <Navbar title={dict.title}>
                <SignOutButton>Sign out</SignOutButton>
            </Navbar>
            
            {props.children}
        </>
    );
}