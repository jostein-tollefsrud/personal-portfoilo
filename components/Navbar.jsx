import Link from 'next/link';
import { navLinks } from '../constants/navlinks';

const Navbar = () => {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href}>
          <a>{link.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul>{links}</ul>
    </nav>
  );
};

export default Navbar;
