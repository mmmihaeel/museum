"use server";
import { Locale } from '@/i18n.config';
import { DictionaryData, getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
const Book = dynamic(() => import('../../../components/Book/Book'), { ssr: false });
import bookStyles from '../book.module.scss';
import { RightPage } from '@/app/components/Book/BookPages'; 

export default async function Page({ params }: { params: { lang: Locale }, }) {

  const localizations: DictionaryData = await getDictionary(params.lang);

  return (
    <Book className={bookStyles.book} localizations={localizations}>
      <title>404</title>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <p style={{fontSize: "38px"}} className={bookStyles.description}>{params.lang === "ua" ? "Такої книги немає :(" : "This book is not found :("}</p>
        </div>
      </div>

  </Book>
  );
} 
