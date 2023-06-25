import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUser } from "@/prismaClient";
import { getServerSession } from "next-auth";
import { getDictionary } from "../../dictionaries";
import SignOutButton from "@/components/auth/buttons/SignOutButton";
import DeleteProfileButton from "@/components/auth/buttons/DeleteProfileButton";
import { AES } from "crypto-js";
import EditButton from "@/components/inputs/EditButton";
import Link from "next/link";

type Props = {
    params: {
        lang: string;
        user: string;
    }
};

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);
    const user = await getUser(session?.user?.email as string);

    //@ts-ignore
    const hmacDigest = AES.encrypt(`${user?.email as string};${user?.password as string}`, process.env.USER_SECRET).toString();

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col w-auto items-center py-32 px-16 mt-12 space-y-5 shadow-lg rounded-lg">
                <div className="flex w-full p-2 items-center justify-center">
                    {dict.registration}: {user?.createdAt.toDateString()}
                </div>
                <div className="w-full border-y-2 border-lightGrey">

                    <div className="flex w-full py-2 items-center justify-between">
                        <span>Email: {user?.email}</span>
                        <EditButton href={`/${props.params.lang}/${props.params.user}/profile/email`}/>
                    </div>
                    <div className="flex w-full py-2 items-center justify-between">
                        <span>{dict.name}: {user?.name}</span>
                        <EditButton href={`/${props.params.lang}/${props.params.user}/profile/name`}/>
                    </div>
                </div>
                <div className="flex w-full justify-center p-2">
                    <Link href={`/${props.params.lang}/${props.params.user}/profile/password`} className="nav-link">{dict.changePassword}</Link>
                </div>
                <div className="flex w-full justify-between">
                    <SignOutButton>{dict.signout}</SignOutButton>
                    <DeleteProfileButton authKey={hmacDigest}>{dict.deleteProfile}</DeleteProfileButton>
                </div>
            </div>
        </div>
    );
}