import Editor from "@/components/inputs/Editor";
import { getDictionary } from "../../dictionaries";

type Props = {
    params: {
        lang: string
    }
}

export default async function page(props: Props){

    const dict = await getDictionary(props.params.lang);

    return (
        <div className="relative w-screen h-screen pt-24 md:pt-20 px-5">
            <Editor dict={dict}/>
        </div>
    );
}