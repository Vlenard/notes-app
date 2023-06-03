"use client"

import { signIn } from "next-auth/react";

const SignInButton = (props: any) => {
  return (
    <a onClick={(ev) => {
      ev.preventDefault();
      signIn();
    }}>Sign in</a>
  );
};

export default SignInButton;