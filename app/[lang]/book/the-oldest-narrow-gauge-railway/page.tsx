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

import TrackSheme from "../../../assets/images/book/track-sheme.png";
import TrackFabric from "../../../assets/images/book/track-fabric.png";
import TrackTwenty from "../../../assets/images/book/track-20.png";
import TrackMizun from "../../../assets/images/book/track-mizun.png";
import TrackBuilding from "../../../assets/images/book/track-building.png";
import TrackCollection from "../../../assets/images/book/track-collection.png";
import TrackBridge from "../../../assets/images/book/track-bridge.png";
import TrackTrainRoad from "../../../assets/images/book/track-trainroad.png";
import TrackNewMizun from "../../../assets/images/book/track-newmizun.png";
import TrackTrain from "../../../assets/images/book/track-train.png";
import Track4558 from "../../../assets/images/book/track-k-4-558.png";
import TrackCollection1959 from "../../../assets/images/book/track-1959.png";

export default async function Page({ params }: { params: { lang: Locale }, }) {

  const localizations: IDictionaryData = await getDictionary(params.lang);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (localizations as any).book.pages['theOldestNarrowGaugeRailway'];

  return (
    <Book className={bookStyles.book} localizations={localizations}>
      <title>{localizations.train.navigation.theOldestNarrowGaugeRailway}</title>

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
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['2'] }}></p>
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
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['3'] }}></p>
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
          <Image src={TrackSheme} alt={'Oldest track sheme'} className={bookStyles.popper_gerb} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['4'] }}></p>
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
          <Image src={TrackFabric} alt={'Oldest track Fabric'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['5'] }}></p>
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
          <Image src={TrackTwenty} alt={'Oldest track XX'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['6'] }}></p>
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
          <Image src={TrackMizun} alt={'Oldest track Mizun'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['7'] }}></p>
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
          <Image src={TrackBuilding} alt={'Oldest track Building'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['8'] }}></p>
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
          <Image src={TrackCollection} alt={'Oldest track Train Collection'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['9'] }}></p>
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
          <Image src={TrackBridge} alt={'Oldest track Bridge'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['10'] }}></p>
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
          <Image src={TrackTrainRoad} alt={'Oldest track Train Road'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['11'] }}></p>
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
          <Image src={TrackNewMizun} alt={'Oldest track New Mizun'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['12'] }}></p>
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
          <Image src={TrackTrain} alt={'Oldest track Train'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['13'] }}></p>
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
          <Image src={Track4558} alt={'Oldest track train k-4-558'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['14'] }}></p>
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
          <Image src={TrackCollection1959} alt={'Oldest track collection 1959'} />
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['15'] }}></p>
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
          <video controls className={bookStyles.track_video}>
            <source src="/videos/theOldestNarrowGaugeRailway.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={bookStyles.description} dangerouslySetInnerHTML={{ __html: data['16'] }}></p>
        </div>
      </div>

      <div className={`page ${bookStyles.page}`}>
        <LeftPage className={bookStyles.page_bg} />
      </div>

    </Book>
  );
} 
