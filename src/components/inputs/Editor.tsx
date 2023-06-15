"use client"

import { useRef } from "react";
import Textarea from "./Textarea";
import ActionButton from "./ActionButton";
import { useSession } from "next-auth/react";
import { useParams, usePathname, useRouter } from "next/navigation";

type Props = {
    dict: any;
};

const Editor = (props?: Props) => {

    const session = useSession();
    const router = useRouter();
    const params = useParams();
    const title_ref = useRef<HTMLInputElement>(null);
    const content_ref = useRef<HTMLInputElement>(null);

    const save = async () => {
        const title: string = title_ref.current?.innerText as string;
        const content: string = content_ref.current?.innerText as string;

        

        const res = await fetch("http://localhost:3000/api/notes/save", {
            method: "POST", 
            cache: "no-cache", 
            headers: {
                "Content-Type": "application/json"
            },

        });
    };

    return (
        <>
            <div className="flex justify-between space-x-5 w-full px-10 mb-2">
                <Textarea ref={title_ref} placeholder="Matrac" />
                <ActionButton onClick={save}>{props?.dict.save}</ActionButton>
            </div>

            <hr />

            <Textarea ref={content_ref} placeholder="Fordítsd meg a matracot" className="min-h-[80%]"/> 
        </>
    );
};

export default Editor;