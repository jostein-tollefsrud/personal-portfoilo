import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const projectsDirectory = fs.readdirSync(path.join('projects'));
const {
  i18n: { defaultLocale },
} = require('../next-i18next.config');

/**
 * Get all project slug to use in getStaticPaths
 */
export function getAllProjectSlugs(locales) {
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
}

/**
 * Get project data for use in getStaticProps
 */
export async function getProjectData(slug, locale) {
  const fullPath = path.join(
    'projects',
    slug,
    locale === defaultLocale ? 'index.md' : `index.${locale}.md`
  );

  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // Use gray-matter to parse the post metadata section
  const { data: frontmatter, content } = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
    slug,
    content,
    ...frontmatter,
  };
}
