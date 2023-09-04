"use server";
import { Locale } from '@/i18n.config';
import { DictionaryData, getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
const Book = dynamic(() => import('../../components/Book/Book'), { ssr: false });
import Image from 'next/image';

const pages = [
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
];


export default async function Page({ params }: { params: { lang: Locale, book_link: string, }, }) {
  const localizations = await getDictionary(params.lang) as DictionaryData;
  console.log(params.book_link);
  return (<Book localizations={localizations}>{pages.map((page, index) => (
    <div key={index} className="page">
      <Image src={page} alt="" width={200} height={200} />
    </div>
  ))}</Book>);
}
