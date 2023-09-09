"use server";
import { Locale } from '@/i18n.config';
import { DictionaryData, getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
const Book = dynamic(() => import('../../../components/Book/Book'), { ssr: false });
import Image from 'next/image';
import bookStyles from '../book.module.scss';
import { LeftPage, RightPage } from '@/app/components/Book/BookPages';

import TouristWalkImg from "../../../assets/images/book/tourist-walk.png";
import TouristGroupImg from "../../../assets/images/book/tourist-group.png";
import TouristGreenTrainImg from "../../../assets/images/book/tourist-internet-green-train.png";
import TouristRedTrainImg from "../../../assets/images/book/tourist-internet-red-train.png";

export default async function Page({ params }: { params: { lang: Locale }, }) {

  const localizations: DictionaryData = await getDictionary(params.lang);

  const data = (localizations as DictionaryData).book.pages['touristRoute'];

  return (
    <Book className={bookStyles.book} localizations={localizations}>
      <title>{localizations.train.navigation.touristRoute}</title>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['1'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <video controls className={bookStyles.track_video}>
            <source src="/videos/touristRoute-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['2'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={TouristWalkImg} alt={'Tourist track walk'} className={bookStyles.tourist_walk} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['3'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={TouristGroupImg} alt={'Tourist track group'} className={bookStyles.popper_baron} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['4'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['5'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={TouristGreenTrainImg} alt={'Tourist track green train'} className={bookStyles.popper_baron} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['6'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <Image src={TouristRedTrainImg} alt={'Tourist track red train'} className={bookStyles.popper_baron} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['7'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <RightPage className={bookStyles.page_bg} />
        <div className={bookStyles.content}>
          <video controls className={bookStyles.video_vertical}  poster="/videos/tourist-route-poster.png">
            <source src="/videos/touristRoute-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['8'] }}></p>
        </div>
      </div>

    </Book>
  );
} 
