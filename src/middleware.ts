import { match } from "@formatjs/intl-localematcher";
import Negotiator, {Headers} from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en-US", "hu-HU"];
let defaultLocale = "en-US";

const getLocale = (req: NextRequest): string => {
    const headers: Headers = {"accept-language": req.headers.get("accept-language") as string};
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}; 

export const middleware = (req: NextRequest): NextResponse | void => {
    const pathname: string = req.nextUrl.pathname;

    if(!pathname.includes("api")){//if not an api request
        // Check if there is any supported locale in the pathname
        const missingLocale: boolean = locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

        // Redirect if there is no locale
        if(missingLocale){
            const locale: string = getLocale(req);

            // e.g. incoming request is /products
            // The new URL is now /en-US/products
            return NextResponse.redirect(
                new URL(`/${locale}/${pathname}`, req.url)
            );
        }
    }
};

export const config = {
    matcher: ["/((?!_next).*)"]
}