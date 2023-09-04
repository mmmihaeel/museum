"use server";
import { Locale } from '@/i18n.config';
import { DictionaryData, getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../components/Header/header'), { ssr: true });
const Train = dynamic(() => import('../components/Train/Train'));

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const localizations = await getDictionary(lang) as DictionaryData;

  return (
    <>
      <Header lang={lang} />
      <Train localizations={localizations} />
    </>
  );
}