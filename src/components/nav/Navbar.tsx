"use client"

import React from "react";

type Props = {
    title: string;
    children: React.ReactNode;
};

const Navbar = (props: Props) => {
    return (
        <nav className="fixed top-0 w-full shadow-lg backdrop-blur-md bg-white/20 dark:bg-darkGrey/20 grid sm:grid-cols-2 items-center p-4 z-[1050]">
            <div className="flex-1 font-hand text-2xl dark:text-lightGrey">
                {props.title}
            </div>
            <div className="flex justify-center sm:justify-end space-x-3 sm:pr-16">
                {props.children}
            </div>
        </nav>
    );
};

export default Navbar;