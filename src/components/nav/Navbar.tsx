"use client"

import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select, { Option } from "../inputs/Select";
import { useTheme } from "../Providers/ThemeProvider";
import IconButton from "../inputs/IconButton";


type Props = {
    title: string;
    children: React.ReactNode;
    dict: any;
};

const langOptions: Option[] = [
    { value: "hu-HU", label: "HU" },
    { value: "en-EN", label: "EN" },
    { value: "en-US", label: "EN(US)" }
];



const Navbar = (props: Props) => {

    const winQuery = window.matchMedia("(min-width: 768px)");
    const [theme, setTheme] = useTheme();
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const [selectedLang, setSelectedLang] = useState<Option>(langOptions.find(element => element.value === params.lang) as Option);
    const themeOptions: Option[] = [
        { value: "light", label: props.dict.light },
        { value: "dark", label: props.dict.dark },
        { value: "system", label: props.dict.system }
    ];
    const [selectedTheme, setSelectedTheme] = useState<Option>(themeOptions.find(element => element.value === theme) as Option);
    const [navbar, setNavbar] = useState({
        md: winQuery.matches,
        show: winQuery.matches
    });

    const toggleNavbar = () => {
        if (!navbar.md)
            setNavbar(prev => ({ ...prev, show: !navbar.show }));
    };

    const onQueryChange = (ev: MediaQueryListEvent) => {
        setNavbar({ md: ev.matches, show: ev.matches });
    };

    useEffect(() => {
        winQuery.addEventListener("change", onQueryChange);

        return () => {
            winQuery.removeEventListener("change", onQueryChange);
        };
    }, []);

    useEffect(() => {
        router.replace(`/${selectedLang.value}${pathname.substring(6)}`);
    }, [selectedLang]);

    useEffect(() => {
        setTheme(selectedTheme.value as "dark" | "light" | "system");
    }, [selectedTheme]);

    return (
        <nav className="fixed top-0 w-full shadow-lg backdrop-blur-md bg-white/20 dark:bg-darkGrey/20 flex flex-col space-y-2 md:space-y-0 md:flex-row items-center p-4 z-[1050]">
            <div className="flex w-full md:w-auto justify-between font-hand text-2xl dark:text-lightGrey">
                <span>{props.title}</span>
                {
                    !navbar.md && (
                        <IconButton onClick={toggleNavbar} >
                            {!navbar.show ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            )}
                        </IconButton>
                    )
                }
            </div>
            {
                navbar.show && (
                    <div className="flex w-full flex-col md:flex-row justify-center items-center md:justify-end space-x-3 space-y-3 md:space-y-0">
                        {props.children}
                        <div className="flex space-x-2 pl-4 md:border-l-2 md:border-lightGrey">
                            <Select options={langOptions} onChange={setSelectedLang} selected={selectedLang} />
                            <Select options={themeOptions} onChange={setSelectedTheme} selected={selectedTheme} />
                        </div>
                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;