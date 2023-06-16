"use client"

import { useEffect, useRef, useState } from "react";
import Textarea from "./Textarea";
import ActionButton from "./ActionButton";
import { Note } from "@prisma/client";

type Props = {
    dict: any;
    note: Note | null;
    autherId: number;
};

const Editor = (props: Props) => {

    const title_ref = useRef<HTMLInputElement>(null);
    const content_ref = useRef<HTMLInputElement>(null);
    const [note, setNote] = useState<Note | null>(props.note);
    const [saved, setSaved] = useState({
        count: 0,
        value: false
    });

    const save = async () => {
        const title: string = title_ref.current?.innerText as string;
        const content: string = content_ref.current?.innerText as string;
        let data: any;

        if(!title) return;

        if(note === null){
            data = {
                title: title,
                content: content,
                autherId: props.autherId
            };
        }else{
            data = {
                ...note,
                title: title,
                content: content
            };
        }

        const res = await fetch("http://localhost:3000/api/notes/save", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(data => data.json()).catch(err => console.log(err));

        if(res){
            setNote(note ? res : res.notes[res.notes.length - 1]);  
            setSaved(prev => ({count: prev.count + 1, value: true}));
        }
    };

    useEffect(() => {
        if(saved.count !== 0){
            setTimeout(() => {
                setSaved(prev => ({...prev, value: false}));
            }, 2000);
        }
    }, [note]);

    return (
        <>
            {saved.value && (
                <div className="fixed top-[90%] left-[90%] bg-fblue text-white rounded-full py-2 px-5">
                    {props.dict.saved}
                </div>
            )}

            <div className="flex justify-between space-x-5 w-full px-10 mb-2">
                <Textarea ref={title_ref} placeholder="Matrac">{props?.note?.title}</Textarea>
                <ActionButton onClick={save}>{props?.dict.save}</ActionButton>
            </div>

            <hr />

            <Textarea ref={content_ref} placeholder="Fordítsd meg a matracot!">{props?.note?.content as string}</Textarea> 
        </>
    );
};

export default Editor;