import Link from 'next/link';
import Container from '../Container/Container';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Logo from '../Logo/Logo';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const norwegianLocale = router.locale === 'no';

  const links = [
    {
      id: 1,
      title: norwegianLocale ? 'Hjem' : 'Home',
      href: '/',
    },
    {
      id: 2,
      title: norwegianLocale ? 'Om meg' : 'About',
      href: '/om-meg',
    },
    {
      id: 3,
      title: norwegianLocale ? 'Kontakt' : 'Contact',
      href: '/kontakt',
    },
  ];
  const navlinks = links.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href}>
          <a className="p-3 sm:px-5  block">{link.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <div id="navbar" className="bg-yellow-400 dark:bg-neutral-900">
      <Container>
        <div className="h-20 flex justify-between items-center">
          <Logo className="h-2/6 sm:h-3/6 md:h-4/6" />

          <div className="flex">
            <nav>
              <ul className="flex justify-center items-center">{navlinks}</ul>
            </nav>
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
