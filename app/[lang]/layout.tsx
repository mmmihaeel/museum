import React from 'react';
import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import dynamic from 'next/dynamic';
import { Montserrat_Alternates } from 'next/font/google';
import './globals.scss';

const Header = dynamic(() => import('../components/Header/header'));
const montserratAlternates = Montserrat_Alternates({
  subsets: ['cyrillic'],
  weight: ['100', '200', '300', '500'],
});

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is a main page!',
};

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
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}