import Head from 'next/head';
import Link from 'next/link';

export default function Home({ projects }) {
  const projectList = projects.map((project) => {
    return (
      <li key={project.id}>
        <Link href={'#'}>
          <a>{project.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <>
      <Head>
        <title>Jostein Tollefsrud</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header>
        <h1>
          <span className="font-light block">Jostein Tollefsrud</span>{' '}
          Webutvikler
        </h1>
        <Link href="/">
          <a>Kontakt meg</a>
        </Link>
        <Link href="/">
          <a>Last ned CV</a>
        </Link>
      </header>
      <main>
        <h2>Mine prosjekter</h2>
        {projectList}
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://josteintollefsrud-backend.herokuapp.com/projects`
  );
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      projects: data,
    },
  };
}
