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
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
    </>
  );
};

export default About;
