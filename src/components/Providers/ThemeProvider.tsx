"use client"

import React, { useEffect, useState } from "react";
import { useContext } from "react";

type Props = {
    children: React.ReactNode;
};

type Context = [
    theme: "dark" | "light",
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | "system">>
];

const themeContext = React.createContext<Context | null>(null);

const ThemeProvider = (props: Props) => {

    const getSystemTheme = (): "dark" | "light" => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    const [theme, setTheme] = useState<"dark" | "light" | "system">("system");
    const [actualTheme, setActualTheme] = useState<"dark" | "light">("dark");

    const onSysThemeChange = (ev?: MediaQueryListEvent): void => {
        if(theme === "system"){
            setActualTheme(ev?.matches ? "dark" : "light");
        }
    };

    useEffect(() => {
        const media: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        media.addEventListener("change", onSysThemeChange);
        return () => {
            media.removeEventListener("change", onSysThemeChange);
        };
    }, []);

    useEffect(() => {
        setActualTheme(theme !== "system" ? theme as "dark" | "light" : getSystemTheme());
    }, [theme]);

    return (
        <themeContext.Provider value={[actualTheme, setTheme]}>
            <html className={actualTheme}>
                <head>
                    <script src="http://localhost:8097"></script>    
                </head>
                <body className="dark:bg-darkGrey">
                    {props.children}
                </body>
            </html>
        </themeContext.Provider>
    );
};

export const useTheme = () => useContext(themeContext) as Context;
export default ThemeProvider;