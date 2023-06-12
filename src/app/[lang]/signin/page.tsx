import Navbar from "@/components/nav/Navbar";
import { getDictionary } from "../dictionaries";
import Link from "next/link";
import SignIn from "@/components/auth/pages/SignIn";

type Props = {
    params: {
        lang: string
    }
};

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);

    return (
        <>
            <Navbar title={dict.signin}>
                <Link className="nav-link" href={`${props.params.lang}/registration`}>{dict.registration}</Link>
                <Link className="nav-link" href={`/${props.params.lang}`}>{dict.back}</Link>
            </Navbar>

            <SignIn dict={dict} lang={props.params.lang}/>
        </>
    );
};