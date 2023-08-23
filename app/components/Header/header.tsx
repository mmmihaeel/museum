import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LocaleSwitcher from './locale-switcher';
import Image from 'next/image';
import lovoImg from '../../assets/logo.svg';

import headerStyle from './header-styles.module.scss';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <Image src={lovoImg} alt={'logs'} /> 
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
