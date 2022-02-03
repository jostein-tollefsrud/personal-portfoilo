import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/nav-logo.png';

const NavLogo = () => {
  return (
    <Link href="/">
      <a>
        <Image
          src={logo}
          alt="jostein tollefsrud logo"
          width={'50px'}
          height={'50px'}
          placeholder="blur"
        />
      </a>
    </Link>
  );
};

export default NavLogo;
