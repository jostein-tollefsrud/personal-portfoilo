import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>Om meg - Jostein Tollefsrud</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header>
        <h1>Om meg</h1>

        <Link href="/">
          <a>Last ned CV</a>
        </Link>
        <Link href="/">
          <a>GitHub profil</a>
        </Link>
      </header>
      <main>
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