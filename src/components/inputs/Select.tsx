"use client"

import { ChangeEvent } from "react";

export type Option = {
    value: string;
    label: string;
};

type Props = {
    selected: Option;
    onChange: React.Dispatch<React.SetStateAction<Option>>
    options: Array<Option>
};

const Select = (props: Props) => {

    const onChange = (ev: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(props.options[ev.target.selectedIndex]);
    };

    return (
        <select onChange={onChange} className="px-4 pr-8 py-1 rounded-full border-lightGrey focus:border-fblue border-1 dark:bg-darkGrey w-auto" >
            {
                props.options.map((item, i) => (
                    <option value={item.value} key={i} selected={item.value === props.selected.value}>{item.label}</option>
                ))
            }
        </select>
    );
};

export default Select;