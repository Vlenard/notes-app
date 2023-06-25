import Navbar from "@/components/nav/Navbar";
import { getDictionary } from "../dictionaries";
import Link from "next/link";
import SignIn from "@/components/auth/pages/SignIn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

type Props = {
    params: {
        lang: string;
        user: string;
    }
};

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);

    if(session){
        redirect(`/${props.params.lang}/${props.params.user}`);
    }

    return (
        <>
            <Navbar title={dict.signin}>
                <Link className="nav-link" href={`${props.params.lang}/registration`}>{dict.registration}</Link>
                <Link className="nav-link" href={`/${props.params.lang}`}>{dict.back}</Link>
            </Navbar>

            <SignIn dict={dict} />
        </>
    );
};