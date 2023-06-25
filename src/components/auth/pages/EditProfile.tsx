"use client"

import ActionButton from "@/components/auth/buttons/ActionButton";
import FormInput from "@/components/inputs/FormInput";
import Submit from "@/components/inputs/Submit";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

type Props = {
    dict: any
}

type ResponseData = {
    message: string;
    success: boolean;
};

const EditProfile = (props: Props) => {

    const session = useSession();
    const router = useRouter();
    const params = useParams();
    const password_ref = useRef<HTMLInputElement>(null);
    const newValue_ref = useRef<HTMLInputElement>(null);
    const [states, setStates] = useState({
        error: "",
        warning: props.dict.warnings.editProfile
    });

    const submit = async (ev: FormEvent) => {

        ev.preventDefault();

        const pass = password_ref.current?.value as string;
        const value = newValue_ref.current?.value as string;

        if (pass === "" || value === "") {
            setStates(prev => ({ ...prev, error: props.dict.error.editProfileEmpty }));
            return;
        }

        const res: ResponseData = await fetch("http://localhost:3000/api/auth/edit", {
            method: "POST",
            cache: "no-cache",
            body: JSON.stringify({
                email: session.data?.user?.email,
                password: password_ref.current?.value as string,
                edit: {
                    [params.editKey]: value
                }
            })
        }).then(data => data.json());

        if (!res.success) {
            setStates(prev => ({ ...prev, error: res.message }));
            return;
        }

        setStates({
            error: "",
            warning: props.dict.warnings.signout
        });

        setTimeout((): void => {
            signOut();
        }, 1000);
    };

    return (
        <form onSubmit={submit}>
            <div className="flex flex-col space-y-7">
                <div className="w-full text-center">
                    {states.warning}
                </div>
                <FormInput label={props.dict.password} placeholder="***" ref={password_ref} type="password" />
                {
                    {
                        "password": <FormInput label={`${props.dict.new} ${(props.dict.password as string).toLowerCase()}`} placeholder="***" ref={newValue_ref} type="text" />,
                        "email": <FormInput label={`${props.dict.new} email`} placeholder="Kufi.cuki@gmail.com" ref={newValue_ref} type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />,
                        "name": <FormInput label={`${props.dict.new} ${props.dict.name}`} placeholder="Kufi" type="text" ref={newValue_ref} />
                    }[params.editKey]
                }
                <Submit >{props.dict.save}</Submit>
                <button onClick={() => router.back()} className="nav-link py-2">{props.dict.back}</button>

                <div className="w-full text-center text-red-500">
                    {states.error}
                </div>
            </div>
        </form>
    );
};

export default EditProfile;