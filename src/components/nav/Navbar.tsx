"use client"

import React from "react";

type Props = {
    title: string;
    children: React.ReactNode;
};

const Navbar = (props: Props) => {
    return (
        <nav className="fixed top-0 w-full shadow-lg backdrop-blur-sm bg-white/20 flex items-center p-4 z-[1050]">
            <div className="flex-1 font-hand text-2xl">
                {props.title}
            </div>
            <div className="flex space-x-3">
                {props.children}
            </div>
        </nav>
    );
};

export default Navbar;