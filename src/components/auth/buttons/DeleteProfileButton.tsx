"use client"

import { signOut } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
    className?: string;
    authKey: string;
};

type DeleteProfileResult = {
    message: string;
    success: true;
}

const DeleteProfileButton = (props: Props) => {

    const router = useRouter();
    const params = useParams();

    const onClick = async () => {
        const result: DeleteProfileResult = await fetch("http://localhost:3000/api/auth/delete", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({authKey: props.authKey})
        }).then(data => data.json());

        if(result.success){
            signOut({redirect: true, callbackUrl: `/${params.lang}`});
        }else{
            console.log(result.message);
        }
    };

    return (
        <button
            onClick={onClick}
            className="nav-link"
        >
            {props.children}
        </button>
    );
};

export default DeleteProfileButton;