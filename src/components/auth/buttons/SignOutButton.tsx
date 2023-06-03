"use client"

import { signOut } from "next-auth/react";

const SignOutButton = (props: any) => {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  );
};

export default SignOutButton;