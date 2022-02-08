import Link from 'next/link';

const Card = ({ project }) => {
  let tags;
  if (project.tags) {
    tags = project.tags.map((tag) => (
      <li className="tags" key={tag}>
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
      <ul className="tags-container">{tags}</ul>
      {/* <Link href={`/prosjekter/${project.directory}`}>
        <a>Les mer</a>
      </Link> */}
    </article>
  );
};

export default Card;
