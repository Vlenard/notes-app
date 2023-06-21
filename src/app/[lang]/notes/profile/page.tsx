import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUser, prisma } from "@/prismaClient";
import { getServerSession } from "next-auth";
import { getDictionary } from "../../dictionaries";

type Props = {
    params: {
        lang: string;
    }
};


export default async function Page(props: Props) {
    
    const dict = await getDictionary(props.params.lang);
    const session = await getServerSession(authOptions); 
    const user = await getUser(session?.user?.email as string);
    
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col w-auto items-center py-32 px-20 mt-12 space-y-5 shadow-lg rounded-lg">
                <p>{dict.registration}: {user?.createdAt.toDateString()}</p>
                <p>Email: {user?.email}</p>
                <p>{dict.name}: {user?.name}</p>
            </div>
        </div>
    );
}