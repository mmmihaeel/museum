"use server";
import { Locale } from '@/i18n.config';
import { DictionaryData, getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
const Book = dynamic(() => import('../../components/Book/Book'), { ssr: false });
import Image from 'next/image';
import pageBg from "../../assets/images/book/page.png";
import pageBg2 from "../../assets/images/book/page-2.png";
import bookStyles from './book.module.scss';

const pages = [
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,
  pageBg,

];


export default async function Page({ params }: { params: { lang: Locale, book_link: string, }, }) {
  const localizations = await getDictionary(params.lang) as DictionaryData;
  console.log(params.book_link);
  return (
    <Book localizations={localizations}>
      {pages.map((page, index) => (
      <div key={index} className={`page ${index}`}>
        <Image 
        className={`${bookStyles.pageBg} ${index % 2 === 0 ? bookStyles.odd : bookStyles.event}`} 
        src={index % 2 === 0 ? pageBg2 : pageBg} alt="page background" />
      </div>
    ))}
  </Book>
  );
}
