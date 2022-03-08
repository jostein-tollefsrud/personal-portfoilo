import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import DownloadCVLink from '../../components/DownloadCVLink/DownloadCVLink';
import GitHubLink from '../../components/GithubLink/GithubLink';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common', 'about'])),
    },
  };
}

const About = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('about:SEOtitle')}</title>
        <meta name="description" content={t('about:SEOdescription')} />
      </Head>
      <header>
        <h1>{t('about:title')}</h1>

        <DownloadCVLink value={t('common:downloadCVTitle')} />
        <GitHubLink value={t('common:githubProfile')} />
      </header>
      <main className="mainContainer">
        <p>{t('about:p1')}</p>
      </main>
    </>
  );
};

export default About;
