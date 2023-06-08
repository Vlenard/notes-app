import Navbar from "@/components/nav/Navbar";
import { getDictionary } from "../dictionaries";
import SignInButton from "@/components/auth/buttons/SignInButton";
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
                <SignInButton>{dict.signin}</SignInButton>
                <Link className="nav-link" href={"/"}>{dict.back}</Link>
            </Navbar>

            <Registration dict={dict}/>
        </>
    );
}