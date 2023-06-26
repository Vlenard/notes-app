import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getDictionary } from "./dictionaries";
import Navbar from "@/components/nav/Navbar";
import Link from "next/link";
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
    redirect(`${props.params.lang}/notes`);

  return (
    <>
      <Navbar title={dict.title} dict={dict}>
        <>
          <Link className="nav-link w-full md:w-auto" href={`${props.params.lang}/signin`}>{dict.signin}</Link>
          <Link className="nav-link w-full md:w-auto" href={`${props.params.lang}/registration`}>{dict.registration}</Link>
        </>
      </Navbar>

      <div className="absolute h-full w-full flex justify-center items-center dark:bg-darkGrey">
        <p className="font-hand text-8xl dark:text-lightGrey text-center">{dict.hello}</p>
      </div>
    </>
  );
}