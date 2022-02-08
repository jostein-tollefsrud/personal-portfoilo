import AnchorTag from '../AnchorTag/AnchorTag';
import { personal } from '../../constants/personal';

const DownloadCVLink = ({ value }) => {
  return <AnchorTag href={personal.cv} value={value} icon="download" />;
};

export default DownloadCVLink;
