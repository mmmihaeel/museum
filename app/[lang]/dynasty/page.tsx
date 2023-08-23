import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { Bad_Script } from 'next/font/google';

const badScript = Bad_Script({ subsets: ['cyrillic'], weight: ["400"] });

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className={badScript.className}>
      <div className=''>
        <h1 className=''>{"Hello"}</h1>
        <p className=''>{}</p>
      </div>
    </section>
  );
}
