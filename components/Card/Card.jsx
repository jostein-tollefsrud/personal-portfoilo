import Link from 'next/link';
import AnchorTag from '../AnchorTag/AnchorTag';

const Card = ({ project, liveDemo, githubDemo }) => {
  let tags;
  if (project.tags) {
    tags = project.tags.map((tag) => (
      <li className="tags dark:border-neutral-600" key={tag}>
        {tag}
      </li>
    ));
  }
  return (
    <article className="bg-white hover:border-black dark:hover:border-neutral-500 dark:bg-neutral-800">
      <h3>
        <Link href={`/prosjekter/${project.directory}`}>{project.title}</Link>
      </h3>
      <img src={project.cover_image} alt="" />
      <ul className="tags-container mb-4">{tags}</ul>
      <AnchorTag value={liveDemo} href={project.liveDemo} icon="newTab" />
      <AnchorTag value={githubDemo} href="" icon="gitHub" />

      {/* <Link href={`/prosjekter/${project.directory}`}>
        <a>Les mer</a>
      </Link> */}
    </article>
  );
};

export default Card;
