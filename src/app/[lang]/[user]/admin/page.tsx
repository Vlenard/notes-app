import { getServerSession } from "next-auth";
import { getDictionary } from "../../dictionaries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/prismaClient";

type Props = {
    params: {
        lang: string;
        user: string;
    }
}

const isAdmin = async (email: string): Promise<boolean> => {

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(!user) return false;

    return user.admin;
};

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions);
    const admin = await isAdmin(session?.user?.email as string);

    if(!admin) redirect(`/${props.params.lang}/${props.params.user}`);

    return (
        <div className="flex justify-center w-screen pt-24 md:pt-20 ">
            
        </div>
    );
}