import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const noLocale = router.locale === 'no';
  return (
    <footer className="text-center bg-yellow-400 dark:bg-neutral-800">
      <Link href={router.asPath} locale={noLocale ? 'en' : 'no'}>
        <a className="hover:underline">
          {noLocale ? 'View english page' : 'Se norsk side'}
        </a>
      </Link>
      {noLocale && <div>Laget av meg med Next.js</div>}
      {!noLocale && <div>Made by me with Next.js</div>}
    </footer>
  );
};

export default Footer;
