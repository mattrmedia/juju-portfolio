import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // const onExitComplete = () => {
  //   if (typeof window !== 'undefined') {
  //     // Get the hash from the url
  //     const hashId = window.location.hash;
  //     if (hashId) {
  //       // Use the hash to find the first element with that id
  //       const element = document.querySelector(hashId);
  
  //       if (element) {
  //         // Smooth scroll to that elment
  //         element.scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start',
  //           inline: 'nearest',
  //         });
  //       }
  //     }
  //   }
  // };
  
  return (

    <>
      <Head>
        <title>Julia Roe Portfolio</title>
        <meta name="description" content="Julia Roe / Graphic Designer / Environmental Design" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Outfit:300,400,600,700&amp;lang=en" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lora:300,400,600,700&amp;lang=en" />
      </Head>
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
