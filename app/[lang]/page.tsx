import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';


export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  // const { page } = await getDictionary(lang);

  return (
    <section className=''></section>
  );
}
