import { getServerSession } from "next-auth";
import { getDictionary } from "../../dictionaries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUser, getUsers, prisma } from "@/prismaClient";
import AdminContainer from "@/components/auth/pages/AdminContainer";
import CryptoJS from "crypto-js";

type Props = {
    params: {
        lang: string;
        user: string;
    }
}

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);
    const user = await getUser(session?.user?.email as string);

    if (!user?.admin) redirect(`/${props.params.lang}/${props.params.user}`);

    const users = await getUsers();

    //@ts-ignore
    const hmacDigest = CryptoJS.AES.encrypt(`${user?.email as string};${user?.password as string}`, process.env.USER_SECRET).toString();
    
    return (
        <div className="flex flex-col items-center w-screen pt-24 px-10 space-y-10 md:pt-20 ">
            <div className="w-full text-center border-b-2 border-lightGrey">
                <h1 className="text-2xl">{dict.users}</h1>
            </div>
            {
                users.map((item, i) => (
                    <AdminContainer authKey={hmacDigest} user={item} dict={dict} key={i} />
                ))
            }
        </div>
    );
}