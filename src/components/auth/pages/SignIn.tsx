"use client"

import { signIn } from "next-auth/react";
import React, { FormEvent, useRef } from "react";

const SignIn = () => {

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const onSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        if(username.current && password.current){
            signIn("credentials", {username: username.current.value, password: password.current.value, redirect: true, callbackUrl: "/"});
        }
    };

    return (
        <form action="#" onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
            <br />
            <input ref={username} type="text" name="username" id="username" placeholder="Jenő"/>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input ref={password} type="password" name="password" id="password" />
            <br />
            <input type="submit" value="Sign in" />
        </form>
    );
};

export default SignIn;