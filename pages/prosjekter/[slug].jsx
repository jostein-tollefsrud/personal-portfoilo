import { marked } from 'marked';
import Head from 'next/head';
import Link from 'next/link';
import { getAllProjectSlugs, getProjectData } from '../../lib/projects';

const ProjectPage = ({
  projectData: { title, content, date, tags, excerpt },
}) => {
  let tagList;
  if (tags) {
    tagList = tags.map((tag) => (
      <li className="tags" key={tag}>
        {tag}
      </li>
    ));
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <header>
        <h1>{title}</h1>
        <ul className="flex gap-4">{tagList}</ul>
      </header>
      <main className="mainContainer">
        <Link href="/">Tilbake</Link>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </main>
    </>
  );
};

export default ProjectPage;

export const getStaticPaths = async ({ locales }) => {
  // Get all projects paths
  const paths = await getAllProjectSlugs(locales);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug }, locale }) => {
  // Get all the project data with correct translation using locale
  const projectData = await getProjectData(slug, locale);

  return {
    props: {
      projectData,
    },
  };
};
