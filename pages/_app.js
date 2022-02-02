import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider enableSystem={true} attribute="class">
    // remove comment and remove provider under when added button for switching darkmode
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
