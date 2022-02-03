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
      <header className="my-32">
        <h1 className="mb-12 sm:mb-20 lg:mb-36">
          <span className="font-light block">Jostein Tollefsrud</span>{' '}
          Webutvikler
        </h1>
        <div className="flex flex-col text-center sm:text-left sm:inline-block">
          <Link href="/">
            <a className="bg-blue-600 hover:bg-blue-800 text-white px-7 py-5 font-heading font-bold tracking-wider ">
              Kontakt meg
            </a>
          </Link>
          <Link href="/">
            <a className="p-5 sm:p-8 text-blue-600 font-bold">Last ned CV</a>
          </Link>
        </div>
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
