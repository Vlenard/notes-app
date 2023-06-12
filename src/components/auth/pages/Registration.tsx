"use client"

import { FormEvent, useRef, useState } from "react";
import FormInput from "@/components/inputs/FormInput";
import { usePathname, useRouter } from "next/navigation";
import Submit from "@/components/inputs/Submit";

type Props = {
    dict: any
};

const Registration = (props: Props) => {

    const email_ref = useRef<HTMLInputElement>(null);
    const name_ref = useRef<HTMLInputElement>(null);
    const password_ref = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string>();
    const [error, setError] = useState<boolean>();
    const router = useRouter();
    const pathname = usePathname();

    const onSubmit = async (ev: FormEvent<HTMLFormElement>): Promise<void> => {
        ev.preventDefault();

        const res = await fetch("http://localhost:3000/api/auth/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name_ref.current?.value,
                password: password_ref.current?.value,
                email: email_ref.current?.value
            })
        }).then(data => data.json()).catch(() => {
            setError(true);
        })

        console.log(res);
        

        if(res) {
            setName(res.name);
            setError(false);
        }
    }

    return (
        <div className="pt-24 sm:pt-20 px-16 flex justify-center">
            {!name ? (
                <form action="#" onSubmit={onSubmit}>
                    <div className="flex flex-col items-center container py-32 px-20 mt-12 space-y-5 shadow-lg rounded-lg">

                        <FormInput label="Email" placeholder="Gbela.egy.g@gmail.com" type="email" ref={email_ref} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                        <FormInput label={props.dict.name} placeholder="Kufi" type="text" ref={name_ref} />

                        <FormInput label={props.dict.password} placeholder="***" type="password" ref={password_ref} />

                        <Submit>{props.dict.registration}</Submit>

                        {error && <span>{props.dict.error.registration}</span>}
                    </div>
                </form>
            ) : (
                <div className="flex flex-col items-center space-y-2">
                    <span>{props.dict.regSuccess} {name}</span>
                    <a href="#" className="nav-link" onClick={() => router.push(`${pathname.split("/")[1]}/signin`)}>{props.dict.signin}</a>
                </div>
            )}

        </div>
    );
};

export default Registration;