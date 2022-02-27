import Head from 'next/head';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {  
  return (
    <>
      <Head>
        <title>Julia Roe Portfolio</title>
        <meta name="description" content="Julia Roe / Graphic Designer / Environmental Design Cincinnati, Ohio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
