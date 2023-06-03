import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";


let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "hu-HU"];
let defaultLocale = "en-US";

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {


  const pathname: string = request.nextUrl.pathname;

  if (!pathname.includes("api")) {
    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale: boolean = locales.every(
      locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
      const locale: string = getLocale(request);

      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      return NextResponse.redirect(
        new URL(`/${locale}/${pathname}`, request.url)
      );
    }
  }

}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};