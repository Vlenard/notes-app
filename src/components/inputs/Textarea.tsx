"use client"

import React from "react";

type Props = {
    className?: string;
    placeholder?: string;
    children?: string;
};

const Textarea = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div 
            className={`px-10 mt-2 rounded-lg py-2 dark:text-lightGrey dark:bg-darkGrey focus:border-[#0095ff] flex-1 ${props.className}`} 
            data-placeholder={props.placeholder}
            role="textbox"
            ref={ref}
            contentEditable>
            {props.children}
        </div>
    );
});

export default Textarea;