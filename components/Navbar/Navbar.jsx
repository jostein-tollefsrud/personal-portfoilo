import Link from 'next/link';
import { navLinks } from '../../constants/navlinks';
import Container from '../Container/Container';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const links = navLinks.map((link) => {
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
