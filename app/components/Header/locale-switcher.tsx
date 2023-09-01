'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';

import headerStyle from './header-styles.module.scss';

const imageByLocale = {
  ua: require("../../assets/images/locale/ua.svg"),
  en: require("../../assets/images/locale/en.svg")
};

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className={headerStyle.nav_list}>
      {i18n.locales.map(locale => {
        return (
          <li key={locale} className={headerStyle.nav_list_item}>
            <Link
              href={redirectedPathName(locale)}
              className={headerStyle.nav_list_item_link}
            >
              <Image
                  src={imageByLocale[locale]}
                  alt={"locale"}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
