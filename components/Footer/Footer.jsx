import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../Container/Container';

const Footer = () => {
  const router = useRouter();
  const localeList = router.locales.map((locale) => (
    <li key={locale}>
      <Link href={router.asPath} locale={locale}>
        <a>{locale}</a>
      </Link>
    </li>
  ));
  return (
    <footer className="text-center">
      <ul>{localeList}</ul>
      <Container>Laget av meg med Next.js</Container>
    </footer>
  );
};

export default Footer;
