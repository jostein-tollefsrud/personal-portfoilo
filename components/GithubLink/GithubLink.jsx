import AnchorTag from '../AnchorTag/AnchorTag';
import { personal } from '../../constants/personal';

const GitHubLink = ({ value }) => {
  return <AnchorTag href={personal.gitHubLink} value={value} icon="newTab" />;
};

export default GitHubLink;
