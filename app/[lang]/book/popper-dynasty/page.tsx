"use server";
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { IDictionaryData } from '@/app/interfaces/dictionary-data.interface';
import dynamic from 'next/dynamic';
const Book = dynamic(() => import('../../../components/Book/Book'), { ssr: false });
import Image from 'next/image';
import bookStyles from '../book.module.scss';
import { LeftPage, RightPage } from '@/app/components/Book/BookPages'; 

import FingerSVG from "../../../assets/images/book/finger.svg";

import PopperImg from "../../../assets/images/book/popper.png";
import PopperGerbImg from "../../../assets/images/book/popper-gerb.png";
import PopperHouseImg from "../../../assets/images/book/popper-house.png";
import PopperGraveImg from "../../../assets/images/book/popper-grave.png";
import PopperBaronImg from "../../../assets/images/book/popper-baron.png";

export default async function Page({ params }: { params: { lang: Locale }, }) {

  const localizations: IDictionaryData = await getDictionary(params.lang);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (localizations as any).book.pages['popperDynasty'];

  return (
    <Book className={bookStyles.book} localizations={localizations}>
      <title>{localizations.train.navigation.popperDynasty}</title>

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
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['2']}}></p>
        </div>
        <div className={bookStyles.finger_wrapper}>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={PopperImg} alt={'Popper'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['3']}}></p>
        </div>
        <div className={`${bookStyles.finger_wrapper} ${bookStyles.finger_wrapper_left}`}>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={PopperGerbImg} alt={'Popper Gerb'} className={bookStyles.popper_gerb} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['4']}}></p>
        </div>
        <div className={bookStyles.finger_wrapper}>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={PopperHouseImg} alt={'Popper House'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['5']}}></p>
        </div>
        <div className={`${bookStyles.finger_wrapper} ${bookStyles.finger_wrapper_left}`}>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={PopperGraveImg} alt={'Popper grave'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['6']}}></p>
        </div>
        <div className={bookStyles.finger_wrapper}>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
        </div>
      </div>
      
      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['7']}}></p>
        </div>
        <div className={`${bookStyles.finger_wrapper} ${bookStyles.finger_wrapper_left}`}>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={PopperBaronImg} alt={'Popper Baron'} className={bookStyles.popper_baron} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html:  data['8']}}></p>
        </div>
        <div className={bookStyles.finger_wrapper}>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
          <div>
            <Image src={FingerSVG} alt={"swipe"} />
          </div>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
      </div>

  </Book>
  );
} 
