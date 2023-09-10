"use server";
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { IDictionaryData } from '@/app/interfaces/dictionary-data.interface';
import dynamic from 'next/dynamic';
const Book = dynamic(() => import('../../../components/Book/Book'), { ssr: false });
import Image from 'next/image';
import bookStyles from '../book.module.scss';
import { LeftPage, RightPage } from '@/app/components/Book/BookPages'; 

import ResidenceVillaImg from "../../../assets/images/book/residence-villa.png";
import Residence1954Img from "../../../assets/images/book/residence-1954.png";
import ResidenceGermanImg from "../../../assets/images/book/residence-german.png";
import RedidenceOfficerImg from "../../../assets/images/book/residence-officer.png";
import RedidenceOfficersImg from "../../../assets/images/book/residence-officers.png";
import Residence2013Img from "../../../assets/images/book/residence-2013.png";
import Residence2015Img from "../../../assets/images/book/residence-2015.png";
import RsidencePastImg from "../../../assets/images/book/residence-past.png";
import RsidenceTodayImg from "../../../assets/images/book/residence-today.png";

export default async function Page({ params }: { params: { lang: Locale }, }) {

  const localizations: IDictionaryData = await getDictionary(params.lang);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (localizations as any).book.pages['theBaronsResidence'];

  return (
    <Book className={bookStyles.book} localizations={localizations}>
      <title>{localizations.train.navigation.theBaronsResidence}</title>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['1']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={ResidenceVillaImg} alt={'villa of a baron'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['2']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={Residence1954Img} alt={'residence of a baron 1954'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['3']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={ResidenceGermanImg} alt={'german solder'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['4']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={RedidenceOfficerImg} alt={'residence of a baron german officer'} className={bookStyles.tourist_walk} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['5']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={RedidenceOfficersImg} alt={'residence of a baron german officers'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['6']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={Residence2013Img} alt={'residence of a baron 2013'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['7']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={Residence2015Img} alt={'residence of a baron 2015'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['8']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={RsidencePastImg} alt={'residence of a baron past'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['9']}}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={RsidenceTodayImg} alt={'residence of a baron today'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['10']}}></p>
        </div>
      </div>

  </Book>
  );
} 
