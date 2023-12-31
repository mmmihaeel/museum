import React from 'react';
import { Locale, i18n } from '@/i18n.config';
import { Montserrat_Alternates } from 'next/font/google';
import './globals.scss';

const montserratAlternates = Montserrat_Alternates({
  subsets: ['cyrillic'],
  weight: ['100', '200', '300', '500'],
});

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${montserratAlternates.className} $`}>
        {children}
      </body>
    </html>
  );
}