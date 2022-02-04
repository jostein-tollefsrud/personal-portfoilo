import Head from 'next/head';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Om meg - Jostein Tollefsrud</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="contact-container">
        <header>
          <h1>Kontakt meg</h1>

          <Link href="/">
            <a className="text-blue-600 font-bold mb-5 block">Last ned CV</a>
          </Link>

          <p>
            Jeg vil gjerne høre fra deg om du ønsker å jobbe sammen med meg.
            Kontakt meg på skjemaet nedenfor, eller send meg en e-post direkte
          </p>
        </header>
        <main className="mainContainer">
          <form className="bg-yellow-400 dark:bg-neutral-800 grid p-8">
            <label htmlFor="name">Fullt navn</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="mail">E-post adresse</label>
            <input type="mail" name="mail" id="mail" />

            <label htmlFor="message">Melding</label>
            <textarea name="message" id="message"></textarea>

            <button
              className="bg-blue-600 text-white font-heading font-bold tracking-wider py-5"
              type="submit"
            >
              Send melding
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
