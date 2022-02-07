import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// Get file names under /projects
const projectsDirectory = fs.readdirSync(path.join('projects'));

const {
  i18n: { defaultLocale },
} = require('../next-i18next.config');

/**
 * Get all project data in sorted order FIX LATER!!!!!
 */
// export function getSortedProjectsData(locale) {
//   const allPostsData = projectsDirectory
//     .map((directory) => {
//       // Read markdown file as string
//       const filename =
//         locale === defaultLocale ? 'index.md' : `index.${locale}.md`;
//       const fullPath = path.join(postsDirectory, directory, filename);

//       if (!fs.existsSync(fullPath)) {
//         return;
//       }

//       const fileContents = fs.readFileSync(fullPath, 'utf8');

//       // Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents);

//       // Combine the data with the id
//       return {
//         directory,
//         ...matterResult.data,
//       };
//     })
//     .filter((post) => post);
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

/**
 * Get all project slug to use in getStaticPaths
 */
export const getAllProjectSlugs = (locales) => {
  let paths = [];

  for (let slug of projectsDirectory) {
    for (let locale of locales) {
      let fullpath = path.join(
        'projects',
        slug,
        locale === defaultLocale ? 'index.md' : `index.${locale}.md`
      );
      if (!fs.existsSync(fullpath)) {
        continue;
      }

      paths.push({ params: { slug }, locale });
    }
  }

  return paths;
};

/**
 * Get project data for use in getStaticProps
 */
export const getProjectData = async (slug, locale) => {
  const fullPath = path.join(
    'projects',
    slug,
    locale === defaultLocale ? 'index.md' : `index.${locale}.md`
  );

  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // Use gray-matter to parse the project metadata section
  const { data: frontmatter, content } = matter(fileContents);

  return {
    slug,
    content,
    ...frontmatter,
  };
};
