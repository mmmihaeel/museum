import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from '@/i18n.config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function isStaticAssets(path: string) {
  const imageExtensions = ['.png', '.gif', '.svg', '.jpg', '.mov', '.jpeg', '.webm', '.json', '.js', '.css'];
  const lowerPath = path.toLowerCase();
  for (const ext of imageExtensions) {
    if (lowerPath.endsWith(ext)) {
      return true;
    }
  }
  return false;
}

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale && !isStaticAssets(request.nextUrl.pathname)) {
    const locale = getLocale(request);
    console.log(request.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
