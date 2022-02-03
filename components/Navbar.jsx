import Link from 'next/link';
import { navLinks } from '../constants/navlinks';
import NavLogo from './NavLogo';
import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href}>
          <a className="p-4 dark:text-black">{link.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-yellow-400">
      <Container>
        <div className="m-auto h-20 max-w-7xl flex justify-between items-center">
          <NavLogo />
          <div className="flex">
            <nav>
              <ul className="flex">{links}</ul>
            </nav>
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
