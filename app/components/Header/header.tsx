import LocaleSwitcher from './locale-switcher';
import Image from 'next/image';
import lovoImg from '../../assets/images/logos/logo.svg';

import headerStyle from './header-styles.module.scss';

export default async function Header() {

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <Image src={lovoImg} alt={'logs'} />
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
