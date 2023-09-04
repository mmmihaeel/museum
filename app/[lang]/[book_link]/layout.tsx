import Image from 'next/image';
import bookBg from '../../assets/images/book/layer-book.svg';
import bookStyles from './book.module.scss';


export default function BookLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className={bookStyles.main}>
        <div className={bookStyles.container}>
          <Image src={bookBg} className={bookStyles.book_bg} alt={'book background'} />
          <div className={bookStyles.book_page}>
            {children}
          </div>
        </div>
      </main>
    );
  }