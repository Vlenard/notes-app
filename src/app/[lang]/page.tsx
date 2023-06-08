import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getDictionary } from "./dictionaries";
import Navbar from "@/components/nav/Navbar";
import Link from "next/link";
import SignInButton from "@/components/auth/buttons/SignInButton";
import { redirect } from "next/navigation";

type Props = {
  params: {
    lang: string
  }
};

export default async function Page(props: Props) {

  const dict = await getDictionary(props.params.lang);
  const session = await getServerSession(authOptions);

  if(session !== null) 
    redirect("/notes");

  return (
    <>
      <Navbar title={dict.title}>
        <>
          <SignInButton>{dict.signin}</SignInButton>
          <Link className="nav-link" href="/registration">{dict.registration}</Link>
        </>
      </Navbar>

      <div className="absolute h-full w-full flex justify-center items-center dark:bg-darkGrey">
        <p className="font-hand text-8xl dark:text-lightGrey text-center">{dict.hello}</p>
      </div>
    </>
  );
}