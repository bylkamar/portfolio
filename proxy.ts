import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales, type Locale } from "./app/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 an

/**
 * Redirige les URLs sans locale vers `/fr` ou `/en`.
 *
 * Ordre de priorité : choix explicite déjà fait par le visiteur (cookie posé par * le sélecteur de langue), puis `Accept-Language`, puis `defaultLocale`.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  if (LANGUAGE_TAG.test(pathname.split("/")[1] ?? ""))
    return NextResponse.next();

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  // Mémorise la langue servie pour que le repli soit stable d'une visite à l'autre.
  response.cookies.set(COOKIE_NAME, locale, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
  return response;
}

/** Forme d'un code langue : "de", "pt-BR"… */
const LANGUAGE_TAG = /^[a-z]{2}(-[a-zA-Z]{2})?$/;

function resolveLocale(request: NextRequest): Locale {
  const fromCookie = request.cookies.get(COOKIE_NAME)?.value;
  if (fromCookie && isKnown(fromCookie)) return fromCookie;

  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.split("-")[0].toLowerCase(), q: q ? Number(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    const match = preferred.find((entry) => isKnown(entry.tag));
    if (match) return match.tag as Locale;
  }

  return defaultLocale;
}

function isKnown(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const config = {
  // Tout sauf les assets et les routes internes de Next.
  matcher: ["/((?!_next|assets|api|.*\\.[\\w]+$).*)"],
};
