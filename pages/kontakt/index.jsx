import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import AnchorTag from '../../components/AnchorTag/AnchorTag';
import DownloadCVLink from '../../components/DownloadCVLink/DownloadCVLink';
import GitHubLink from '../../components/GithubLink/GithubLink';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'common', 'form'])),
    },
  };
}

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('contact:SEOtitle')}</title>
        <meta name="description" content={t('contact:SEOdescription')} />
      </Head>
      <div className="contact-container">
        <header>
          <h1>{t('contact:title')}</h1>

          <DownloadCVLink value={t('common:downloadCVTitle')} />

          <GitHubLink value={t('common:githubProfile')} />
        </header>
        <main className="mainContainer text-center">
          <p className="max-w-3xl mt-4  m-auto">{t('contact:desc')} </p>
          <AnchorTag
            value={t('contact:sendMail')}
            href="mailto:mail@josteintollfsrud.no"
            target="_self"
          />
          {/* <form className="bg-yellow-400 dark:bg-neutral-800 grid p-8">
            <label htmlFor="name">{t('form:fullName')}</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="mail">{t('form:email')}</label>
            <input type="mail" name="mail" id="mail" />

            <label htmlFor="message">{t('form:msg')}</label>
            <textarea name="message" id="message"></textarea>

            <button className="bg-blue-600 text-white py-4" type="submit">
              {t('form:send_msg')}
            </button>
          </form> */}
        </main>
      </div>
    </>
  );
};

export default Contact;
