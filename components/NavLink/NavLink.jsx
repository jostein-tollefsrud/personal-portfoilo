import Link from 'next/link';

const NavLink = ({ value, href }) => {
  return (
    <Link href={href}>
      <a>{value}</a>
    </Link>
  );
};

export default NavLink;
