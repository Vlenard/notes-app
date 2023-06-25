import { getDictionary } from "@/app/[lang]/dictionaries";
import EditProfile from "@/components/auth/pages/EditProfile";

type Props = {
    params: {
        lang: string;
        editKey: string;
    }
};

export default async function Page(props: Props) {

    const dict = await getDictionary(props.params.lang);

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex w-auto items-center py-32 px-16 mt-12 shadow-lg rounded-lg">
                <EditProfile dict={dict}/>
            </div>
        </div>
    );
}