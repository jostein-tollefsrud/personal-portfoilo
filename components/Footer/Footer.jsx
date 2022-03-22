import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const noLocale = router.locale === 'no';
  return (
    <footer className="text-center bg-yellow-400 dark:bg-neutral-800">
      {noLocale && <div>Laget av meg med Next.js</div>}
      {!noLocale && <div>Made by me with Next.js</div>}
    </footer>
  );
};

export default Footer;
