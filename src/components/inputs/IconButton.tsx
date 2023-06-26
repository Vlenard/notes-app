"use client"

type Props = {
    //@ts-ignore
    onClick: (ev: MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode; 
    className?: string;
    //@ts-ignore
    onBlur?: (ev: FocusEvent<HTMLButtonElement>) => void;
    //@ts-ignore
    onFocus?: (ev: FocusEvent<HTMLButtonElement>) => void;
}

const IconButton = (props: Props) => {
    return (
        <button onBlur={props.onBlur} onFocus={props.onFocus} onClick={props.onClick} className={`bg-white dark:bg-darkGrey dark:fill-lightGrey p-2 hover:bg-fblue hover:dark:bg-fblue hover:fill-white hover:dark:fill-white rounded-full transition-colors duration-300 ${props.className}`}>
            {props.children}
        </button>
    );
};

export default IconButton;