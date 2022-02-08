import { FiDownload } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

const AnchorTag = ({ value, href, target = '_blank', icon }) => {
  let iconType;
  switch (icon) {
    case 'download':
      iconType = <FiDownload className="inline-block ml-1 mb-1" />;
      break;
    case 'newTab':
      iconType = <FiExternalLink className="inline-block ml-1 mb-1" />;
      break;
    default:
      iconType = '';
      break;
  }
  return (
    <a
      href={href}
      target={target}
      className="text-blue-600 cursor-pointer hover:text-blue-500 hover:underline"
    >
      {value}
      {iconType}
    </a>
  );
};

export default AnchorTag;
