"use server";
import type { Locale } from '@/i18n.config';
import { IDictionaryData } from '@/app/interfaces/dictionary-data.interface';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default) as Promise<IDictionaryData>,
  ua: () => import('@/dictionaries/ua.json').then((module) => module.default) as Promise<IDictionaryData>
};

export const getDictionary: (locale: Locale) => Promise<IDictionaryData> = async (locale: Locale) => dictionaries[locale]();

