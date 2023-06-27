"use client"

import Cookies from "js-cookie";
import React, { useEffect, useMemo, useState } from "react";
import { useContext } from "react";

type Props = {
    children: React.ReactNode;
};

type Context = [
    theme: "dark" | "light" |  "system",
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | "system">>
];

const themeContext = React.createContext<Context | null>(null);

const ThemeProvider = (props: Props) => {

    const [theme, setTheme] = useState<"dark" | "light" | "system">(() => {
        const coockie = Cookies.get("theme");

        if(coockie) return coockie as "dark" | "light" | "system";

        return "system"
    });
    const themeClass = useMemo<"dark" | "light">(() => {
        Cookies.set("theme", theme);
        
        if(theme === "system"){
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        return theme as "dark" | "light";
    }, [theme]);

    return (
        <themeContext.Provider value={[theme, setTheme]}>
            <html className={themeClass}>
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