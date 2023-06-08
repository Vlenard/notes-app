"use client"

import { signOut } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const SignOutButton = (props: Props) => {

  //@ts-ignore
  const onClick = (ev: MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    signOut();
  };

  return (
    <a className="nav-link" onClick={onClick}>{props.children}</a>
  );
};

export default SignOutButton;