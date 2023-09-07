"use server";
import { Locale } from '@/i18n.config';
import { DictionaryData, getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
const Book = dynamic(() => import('../../components/Book/Book'), { ssr: false });
import Image from 'next/image';
import pageBg from "../../assets/images/book/page.png";
import pageBg2 from "../../assets/images/book/page-2.png";
import bookStyles from './book.module.scss';
import Close from '../../components/Close';
import finger from '../../assets/images/book/finger.svg';
import popper from '../../assets/images/book/popper.png';
import popperGerb from '../../assets/images/book/popper-gerb.png';

const pages = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

export default async function Page({ params }: { params: { lang: Locale, book_link: string, }, }) {
  const localizations = await getDictionary(params.lang) as DictionaryData;
  console.log( params.book_link);
  return (
    <Book localizations={localizations}>
      <div className={`page ${bookStyles.page}`}>
        <Image 
        style={{zIndex: "-10"}}
        className={`${bookStyles.pageBg} ${bookStyles.odd}`} 
        src={pageBg2} alt="page background" />
        <div className={bookStyles.content}>
        </div>
      </div>
      <div className={`page ${bookStyles.page}`}>
        <Image 
        style={{zIndex: "-10"}}
        className={`${bookStyles.pageBg} ${bookStyles.event}`} 
        src={pageBg} alt="page background" />
        <div className={bookStyles.content}>
        <p className={bookStyles.description}>
          Леопольд Поппер фон Подграгі (Leopold Frh Popper von Podhrágy)  народився 15 лютого 1821 року в Битчі, Словаччина.
          Як один із перших підприємців Австрії, займався лісозаготівельним  бізнесом в Галичині та Угорщині, заклавши основу для свого величезного комерційного успіху. Був одним із найбагатших землевласників Австро-Угорщини. В 1869 році отримав угорське дворянство, а в 1882 році - австрійське.
          У 1860-х і 1870-х роках почав оптом продавати деревину з Гліника (Битча), яка використовувалась для будівництва та розширення угорської залізничної системи, постачала деревину для будівництва Суецького каналу та відігравала важливу роль у виробництві будівельних матеріалів і деревини в Європі
        </p>
        </div>
      </div>
      <div className={`page ${bookStyles.page}`}>
        <Close className={bookStyles.close} />
        <div className={bookStyles.finger}>
          <Image src={finger} alt={'finger'} />
        </div>
        <Image 
        style={{zIndex: "-10"}}
        className={`${bookStyles.pageBg} ${bookStyles.odd}`} 
        src={pageBg2} alt="page background" />
        <div className={bookStyles.content}>
          <p className={bookStyles.description}>
          Фірма Поппера в 1873 році заснувала першу групу з 18 лісопильних заводів, зокрема паровий тартак у Вигоді «Евеліна» та водяний тартак у Старому Мізуні. Тартак «Евеліна» у 70-80 роках XIXст. був найбільшим підприємством такого роду в Галичині.
          Для збільшення вивозу деревини, в 1883 році барон побудував залізничну вітку від міста Долина до парового тартака «Евеліна». Нову залізничну станцію і поштовий відділок офіційно назвали – Вигода. Згодом назва поширилася на селище, що виникнуло навколо станції.
          Леопольд Поппер фон Подграгі помер 2 березня 1886 року в Сан-Ремо, Італія. Був похований на кладовищі в селі Глініку над Вагом.
          </p>
        </div>
      </div>
      <div className={`page ${bookStyles.page}`}>
        <Image 
        style={{zIndex: "-10"}}
        className={`${bookStyles.pageBg} ${bookStyles.event}`} 
        src={pageBg} alt="page background" />
        <div className={bookStyles.content}>
          <Image src={popper} alt={'popper'} className={bookStyles.popper_image} />
          <p className={bookStyles.description} style={{marginTop: '15px'}}>
          Барон Леопольд Поппер (джерело: http:// <br /> mek.oszk.hu/16300/16323)
          </p>
        </div>
      </div>
      <div className={`page ${bookStyles.page}`}>
        <Close className={bookStyles.close} />
        <div className={bookStyles.finger}>
          <Image src={finger} alt={'finger'} />
        </div>
        <Image 
        style={{zIndex: "-10"}}
        className={`${bookStyles.pageBg} ${bookStyles.odd}`} 
        src={pageBg2} alt="page background" />
        <div className={bookStyles.content}>
          <Image src={popperGerb} alt={'popper'} className={bookStyles.popper_image_gerb} />
          <p className={bookStyles.description} style={{marginTop: '15px'}}>
          Герб барона Поперра <br />
          (Джерело: http://www.novanobilitas.eu/rod/<br />popper-z-podhragy)
          </p>
        </div>
      </div>
  </Book>
  );
}
