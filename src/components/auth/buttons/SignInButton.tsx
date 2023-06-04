"use client"

import { signIn } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const SignInButton = (props: Props) => {

  //@ts-ignore
  const onClick = (ev: MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    signIn();
  };

  return (
    <a className="nav-link" onClick={onClick}>{props.children}</a>
  );
};

export default SignInButton;