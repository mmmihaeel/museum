"use server";
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
export async function getLocalizations(locale: Locale) {
    return {
        ...(async () => {
            await getDictionary(locale);
        })()
    };
}