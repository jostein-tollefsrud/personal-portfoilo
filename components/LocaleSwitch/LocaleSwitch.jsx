import Link from 'next/link';
import { useRouter } from 'next/router';

const LocaleSwitch = () => {
  const router = useRouter();
  const noLocale = router.locale === 'no';

  return (
    <Link href={router.asPath} locale={noLocale ? 'en' : 'no'}>
      <a className="p-3 flex items-center">{noLocale ? 'English' : 'Norsk'}</a>
    </Link>
  );
};

export default LocaleSwitch;
