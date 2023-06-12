"use client"

type Props = {
    children: React.ReactNode;
};

const Submit = (props: Props) => {
    return (
        <input 
            type="submit" 
            className="bg-fblue text-white rounded-full cursor-pointer px-4 py-2 hover:brightness-110 transition-all duration-300" 
            value={props.children as string}/>
    );
};

export default Submit;