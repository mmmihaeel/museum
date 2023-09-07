"use server";
import type { Locale } from '@/i18n.config';

export type DictionaryData = {
  train: {
        museumMainTitle: string;
        navigation: {
            popperDynasty: string;
            theOldestNarrowGaugeRailway: string;
            touristRoute: string;
            theBaronsResidence: string;
        };
    };
    book: {
        pages: {
            popperDynasty: object;
            theOldestNarrowGaugeRailway: object;
            touristRoute: object;
            theBaronsResidence: object;
        };
    };
};

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default) as Promise<DictionaryData>,
  ua: () => import('@/dictionaries/ua.json').then((module) => module.default) as Promise<DictionaryData>
};

export const getDictionary: (locale: Locale) => Promise<DictionaryData> = async (locale: Locale) => dictionaries[locale]();

