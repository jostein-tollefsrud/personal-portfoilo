// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';
import Link from 'next/link';
import { getAllProjectSlugs, getProjectData } from '../../lib/projects';

const ProjectPage = ({ projectData: { title, content, date } }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <Link href="/">Tilbake</Link>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </main>
    </>
  );
};

export default ProjectPage;

export const getStaticPaths = async ({ locales }) => {
  // Get all project paths
  const paths = await getAllProjectSlugs(locales);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug }, locale }) => {
  const {
    i18n: { defaultLocale },
  } = require('../../next-i18next.config');

  const projectData = await getProjectData(slug, locale);

  //   const fullPath = path.join(
  //     'projects',
  //     slug,
  //     locale === defaultLocale ? 'index.md' : `index.${locale}.md`
  //   );

  //   const fileContents = fs.readFileSync(fullPath, 'utf-8');

  //   const { data: frontmatter, content } = matter(fileContents);

  // const markdownWithMeta = fs.readFileSync(
  //   path.join('projects', slug + '.md'),
  //   'utf-8'
  // );

  //   const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      projectData,
    },
  };
};

// export const getStaticPaths = async () => {
//   const files = fs.readdirSync(path.join('projects'));

//   //   const paths = files.map((filename) => ({
//   //     params: {
//   //       slug: filename.replace('.md', ''),
//   //     },
//   //   }));

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params: { slug } }) => {
//   const markdownWithMeta = fs.readFileSync(
//     path.join('projects', slug + '.md'),
//     'utf-8'
//   );

//   const { data: frontmatter, content } = matter(markdownWithMeta);

//   return {
//     props: {
//       frontmatter,
//       slug,
//       content,
//     },
//   };
// };
