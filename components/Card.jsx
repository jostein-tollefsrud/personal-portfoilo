import Link from 'next/link';
import Image from 'next/image';

const Card = ({ project }) => {
  console.log(project.title);
  return (
    <article>
      <h3>{project.title}</h3>
      <img src={project.cover_image} />
      <Link href={`/prosjekter/${project.directory}`}>
        <a>Les mer</a>
      </Link>
    </article>
  );
};

export default Card;
