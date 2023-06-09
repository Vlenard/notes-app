import Navbar from "@/components/nav/Navbar";
import { getDictionary } from "../dictionaries";
import Link from "next/link";
import Registration from "@/components/auth/pages/Registration";

type Props = {
    params: {
        lang: string
    }
};

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);

    return (
        <>
            <Navbar title={dict.registration}>
                <Link className="nav-link" href={`${props.params.lang}/signin`}>{dict.signin}</Link>
                <Link className="nav-link" href={`/${props.params.lang}`}>{dict.back}</Link>
            </Navbar>

            <Registration dict={dict}/>
        </>
    );
}