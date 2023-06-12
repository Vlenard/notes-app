import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Page() {

    const session = await getServerSession(authOptions);
    
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <p className="font-hand text-8xl dark:text-lightGrey text-center">Hello {session?.user?.name}</p>
            </div>

            <div id="myNotes" className="pt-24 md:pt-20">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quos distinctio! Sunt quo illo dignissimos expedita? Perferendis enim ut molestias doloremque at quas nesciunt magni? Nisi hic architecto magni nihil.</p>
            
            </div>
        </>
    );
}