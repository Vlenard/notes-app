"use client"

import { SessionProvider } from "next-auth/react";
import ThemeProvider from "./ThemeProvider";

type Props = {
    children: React.ReactNode;
};

const Providers = (props: Props) => {
    return (
        <SessionProvider>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </SessionProvider>
    );
};

export default Providers;