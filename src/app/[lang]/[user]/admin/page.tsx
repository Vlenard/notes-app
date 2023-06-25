import { getServerSession } from "next-auth";
import { getDictionary } from "../../dictionaries";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

type Props = {
    params: {
        lang: string
    }
}

const prisma = new PrismaClient();

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

    if(!admin) redirect(`/${props.params.lang}/notes`);

    return (
        <div>
            admin
        </div>
    );
}