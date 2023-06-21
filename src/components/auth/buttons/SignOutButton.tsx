"use client"

import { signOut } from "next-auth/react";
import { useParams } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const SignOutButton = (props: Props) => {

  const params = useParams();

  //@ts-ignore
  const onClick = (ev: MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    signOut({redirect: true, callbackUrl: `/${params.lang}`});
  };

  return (
    <a className="nav-link" onClick={onClick}>{props.children}</a>
  );
};

export default SignOutButton;