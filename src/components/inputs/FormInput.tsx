"use client"

import React from "react";

type Props = {
    className?: string;
    label?: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    value?: string;
    pattern?: string;
};

const FormInput = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
        <label>
            {props.label}
            <br />
            <input 
                className={`w-full rounded-lg py-2 px-3 dark:text-lightGrey dark:bg-darkGrey focus:border-fblue ${props.className}`}
                type={props.type} 
                ref={ref} 
                placeholder={props.placeholder} 
                value={props.value}
                pattern={props.pattern} />
        </label>
    );
});

export default FormInput;