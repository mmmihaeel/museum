import Image from 'next/image';
import bookBg from '../../assets/images/book/layer-book.svg';
import bookStyles from './book.module.scss';
import { Locale } from '@/i18n.config';
import { Bad_Script } from 'next/font/google';

const badScript = Bad_Script({
  subsets: ['cyrillic'],
  weight: ['400'],
});

export default function BookLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { lang: Locale };
}) {
  return (<>
    <html lang={params.lang}>
      {/* <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4/turn.css"></link>
      </head> */}
      <body className={`${badScript.className}`}>
        <main className={bookStyles.main}>
          <div className={bookStyles.container}>
            <Image src={bookBg} className={bookStyles.book_bg} alt={'book background'} />
            <div className={bookStyles.book_page}>
              {children}
            </div>
          </div>
        </main>
      </body >
      <script async src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
      <script async src="https://unpkg.com/turn.js@latest"></script>
    </html >
  </>
  );
}