"use client"

import { Note } from "@prisma/client";
import ActionButton from "../inputs/ActionButton";
import { useParams, useRouter } from "next/navigation";

type Props = {
    authKey: string;
    note: Note;
};

const NotesIndex = (props: Props) => {

    const router = useRouter();
    const params = useParams();

    const deleteNote = async () => {
        const deleted = await fetch("http://localhost:3000/api/notes/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                authKey: props.authKey,
                noteId: props.note.id
            })
        }).then(data => data.json());

        if(deleted.success){
            router.refresh();
        }
    }; 

    const edit = () => {
        router.push(`/${params.lang}/notes/${props.note.id}`);
    };

    return (
        <div className="flex flex-col min-h-[300px] min-w-[300px] p-10 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{props.note.title}</h2>
            <hr />
            <p>{props.note.content}</p>
            <hr />
            <ul>
                <li>Created: {props.note.createdAt.toUTCString()}</li>
                <li>Updated: {props.note.updatedAt.toUTCString()}</li>
            </ul>
            <div className="flex flex-1 items-end justify-end space-x-2">
                <ActionButton onClick={deleteNote}>Delete</ActionButton>
                <ActionButton onClick={edit}>Edit</ActionButton>
            </div>
        </div>
    );
};

export default NotesIndex;