import Link from 'next/link';
import { FiDownloadCloud } from 'react-icons/fi';

const DownloadCV = ({ value }) => {
  return (
    <Link href="#">
      <a className="text-blue-600">
        {value} <FiDownloadCloud className="inline" />
      </a>
    </Link>
  );
};

export default DownloadCV;
