import Image from 'next/image';
import bookBg from '../../assets/images/book/layer-book.svg';
import bookStyles from './book.module.scss';
import { Locale } from '@/i18n.config';

import Close from '@/app/components/Close';

export default function BookLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { lang: Locale };
}) {
  return (<>
    <html lang={params.lang}>
      <body>
        <main className={bookStyles.main}>
          <div className={bookStyles.container}>
            <Image src={bookBg} className={bookStyles.book_bg} alt={'book background'} />
            <div className={bookStyles.book_page}>
              {children}
            </div>
          </div>
          <Close className={bookStyles.close} href={`/${params.lang}`} />
        </main>
      </body >
      <script async src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    </html >
  </>
  );
}