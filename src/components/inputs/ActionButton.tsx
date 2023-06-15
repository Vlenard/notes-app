type Props = {
    children: React.ReactNode;
    className?: string;
    //@ts-ignore
    onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
};

const ActionButton = (props: Props) => {
    return (
        <button 
            onClick={props.onClick}
            className={`bg-fblue text-white rounded-full cursor-pointer px-4 py-2 hover:brightness-110 transition-all duration-300 ${props.className}`}
            >
                {props.children}
        </button>
    );
};

export default ActionButton;