"use server";
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { IDictionaryData } from '@/app/interfaces/dictionary-data.interface';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../components/Header/header'), { ssr: true });
const Train = dynamic(() => import('../components/Train/Train'), { ssr: true });

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const localizations = await getDictionary(lang) as IDictionaryData;
  return (
    <>
      <Header />
      <Train localizations={localizations} lang={lang} />
    </>
  );
}