import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>
            <a>Hjem</a>
          </Link>
        </li>
        <li>
          <Link href={'/om-meg'}>
            <a>Om meg</a>
          </Link>
        </li>
        <li>
          <Link href={'/kontakt'}>
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
