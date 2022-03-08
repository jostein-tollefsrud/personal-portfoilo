import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// Import components
import Card from '../components/Card/Card';
import DownloadCVLink from '../components/DownloadCVLink/DownloadCVLink';

export default function Home(props) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('home:SEOtitle')}</title>
        <meta name="description" content={t('home:SEOdescription')} />
      </Head>

      <header className="main_header">
        <h1>
          <span className="font-light block">Jostein Tollefsrud</span>{' '}
          {t('home:title')}
        </h1>
        <div>
          <Link href="/kontakt">
            <a className="bg-blue-600 hover:bg-blue-800 rounded-md text-white btn">
              {t('common:contactMe')}
            </a>
          </Link>

          <DownloadCVLink value={t('common:downloadCVTitle')} />
        </div>
      </header>
      <main className="mainContainer">
        <h2 className="text-center">{t('home:projectsTitle')}</h2>
        <div className="card-container">
          {props.allProjectsData.map((project, index) => (
            <Card
              key={index}
              project={project}
              liveDemo={t('common:liveDemo')}
              githubDemo={t('common:githubDemo')}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const {
    i18n: { defaultLocale },
  } = require('../next-i18next.config');

  // Get directorys from the projects directory
  const projectsDirectory = fs.readdirSync(path.join('projects'));

  // Get slug and frontmatter from projects
  const allProjectsData = projectsDirectory.map((directory) => {
    const fileName =
      locale === defaultLocale ? 'index.md' : `index.${locale}.md`;
    const fullPath = path.join('projects', directory, fileName);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // User gray-matter to parse the project metadata section
    const { data: frontmatter } = matter(fileContents);

    // Combine the data with the directory
    return {
      directory,
      ...frontmatter,
    };
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'common',
        'navigation',
      ])),

      allProjectsData,
    },
  };
}
