import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jostein Tollefsrud</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <h1>Jostein Tollefsrud</h1>
        <p>Her kommer ny portfolio for meg selv.</p>
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://josteintollefsrud-backend.herokuapp.com/projects`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return {
//     props: {
//       projects: data,
//     },
//   };
// }
