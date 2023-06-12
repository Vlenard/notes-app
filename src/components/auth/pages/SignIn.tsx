"use client"

import FormInput from "@/components/inputs/FormInput";
import Submit from "@/components/inputs/Submit";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

type Props = {
    lang: string;
    dict: any;
};

const SignIn = (props: Props) => {

    const session = useSession();
    const router = useRouter();
    const email_ref = useRef<HTMLInputElement>(null);
    const password_ref = useRef<HTMLInputElement>(null);

    const onSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        if (email_ref.current && password_ref.current) {
            signIn("credentials", { username: email_ref.current.value, password: password_ref.current.value, redirect: true, callbackUrl: `/${props.lang}/notes` });
        }
    };


    if(!session){
        router.push(`${props.lang}/notes`);
    }

    return (
        <div className="pt-24 sm:pt-20 px-16 flex justify-center">
            <form action="#" onSubmit={onSubmit}>
                <div className="flex flex-col container items-center py-32 px-20 mt-12 space-y-5 shadow-lg rounded-lg">
                    <FormInput label="Email" placeholder="Kufi.cuki@gmail.com" ref={email_ref} type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <FormInput label="Password" placeholder="***" ref={password_ref} type="password" />
              
                    <Submit>{props.dict.signin}</Submit>
                </div>
            </form>
        </div>
    );
};

export default SignIn;