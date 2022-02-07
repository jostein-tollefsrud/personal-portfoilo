import Link from 'next/link';

const Card = ({ project }) => {
  let tags;
  if (project.tags) {
    tags = project.tags.map((tag) => <div key={tag}>{tag}</div>);
  }
  return (
    <article>
      <h3>
        <Link href={`/prosjekter/${project.directory}`}>{project.title}</Link>
      </h3>
      <img src={project.cover_image} />
      {tags}
      {/* <Link href={`/prosjekter/${project.directory}`}>
        <a>Les mer</a>
      </Link> */}
    </article>
  );
};

export default Card;
