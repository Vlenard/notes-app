"use client"

import ActionButton from "@/components/inputs/ActionButton";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    dict: any;
    user: User;
    authKey: string;
};

const AdminContainer = (props: Props) => {

    const router = useRouter();
    const [error, setError] = useState<string>();

    const onDelete = async (ev: MouseEvent) => {

        ev.preventDefault();

        const deleteRes = await fetch("http://localhost:3000/api/auth/delete", {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                target: props.user.email,
                authKey: props.authKey
            })
        }).then(data => data.json());

        console.log(deleteRes.message);
        

        if(deleteRes.success){
            router.refresh();
        }
    };

    const onAdmin = async (ev: MouseEvent) => {
        ev.preventDefault();

        const promote = await fetch("http://localhost:3000/api/auth/admin", {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                target: props.user.email,
                authKey: props.authKey
            })
        }).then(data => data.json());

        if(!promote.success){
            setError(promote.error);
            return;
        }

        router.refresh();
    };

    return (
        <div className="flex flex-col container border-[1px] rounded-lg border-lightGrey p-2 shadow-lg">
            <div className="w-full text-center border-b-[1px] border-lightGrey ">
                <h1 className="text-lg">{props.user.name}  ({props.user.createdAt.toUTCString()})</h1>
            </div>
            <span>Id: {props.user.id}</span>
            <span>Email: {props.user.email}</span>
            <span>Role: {props.user.admin ? "Admin" : "User"}</span>
            {
                !props.user.admin && (
                    <div className="flex justify-end space-x-2">
                        <ActionButton onClick={onDelete}>{props.dict.delete}</ActionButton>
                        <ActionButton onClick={onAdmin}>Admin</ActionButton>
                    </div>
                )
            }
            {
                error && (
                    <span>{error}</span>
                )
            }
        </div>
    );
};

export default AdminContainer;