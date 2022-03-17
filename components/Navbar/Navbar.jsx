import Link from 'next/link';
import Container from '../Container/Container';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Logo from '../Logo/Logo';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LocaleSwitch from '../LocaleSwitch/LocaleSwitch';

import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <li key={link.id} onClick={() => setIsOpen(false)}>
        <Link href={link.href}>
          <a className="p-3 sm:px-5  block">{link.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <div id="navbar" className="bg-yellow-400 dark:bg-neutral-900">
      <Container>
        <div className="navbar_container">
          <Link href="/">
            <a className="w-11">
              <Logo />
            </a>
          </Link>

          <div className={`${isOpen ? '' : 'isHidden'}`}>
            <div className="navbar_links bg-yellow-400 dark:bg-neutral-900">
              <nav>
                <ul>{navlinks}</ul>
              </nav>
              <ThemeSwitch />
              <LocaleSwitch />
            </div>
          </div>
          <div className="navbar_hamburger text-3xl">
            {isOpen ? (
              <FiX onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
