import Link from 'next/link';
import { navLinks } from '../constants/navlinks';
import Container from './Container';
import ThemeSwitch from './ThemeSwitch';
import Logo from './Logo';

const Navbar = () => {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href}>
          <a className="p-3 sm:px-5 dark:text-black block">{link.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-yellow-400 dark:bg-yellow-300">
      <Container>
        <div className="h-20 flex justify-between items-center">
          <Logo className="h-2/6 sm:h-3/6 md:h-4/6" />

          <div className="flex">
            <nav>
              <ul className="flex justify-center items-center">{links}</ul>
            </nav>
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
