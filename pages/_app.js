import Head from 'next/head';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {  
  return (
    <>
      <Head>
        <title>Julia Roe Portfolio</title>
        <meta name="description" content="Julia Roe / Graphic Designer / Environmental Design Cincinnati, Ohio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Outfit:300,400,600,700&amp;lang=en" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lora:300,400,600,700&amp;lang=en" />
      </Head>
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
