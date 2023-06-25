"use client"

type Props = {
    dict: any;
};

const Saved = (props: Props) => {
    return (
        <div className="fixed top-[90%] left-[90%] bg-fblue text-white rounded-full py-2 px-5">
            {props.dict.saved}
        </div>
    );
};

export default Saved;