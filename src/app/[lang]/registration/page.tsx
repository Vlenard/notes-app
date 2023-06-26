import Navbar from "@/components/nav/Navbar";
import { getDictionary } from "../dictionaries";
import Link from "next/link";
import Registration from "@/components/auth/pages/Registration";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

type Props = {
    params: {
        lang: string
    }
};

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);    
    const session = await getServerSession(authOptions);

    if(session){
        redirect(`/${props.params.lang}/notes`);
    }

    return (
        <>
            <Navbar title={dict.registration} dict={dict}>
                <Link className="nav-link" href={`${props.params.lang}/signin`}>{dict.signin}</Link>
                <Link className="nav-link" href={`/${props.params.lang}`}>{dict.back}</Link>
            </Navbar>

            <Registration dict={dict}/>
        </>
    );
}