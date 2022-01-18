import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header';
import { Gallery } from '../components/Gallery';

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julia Roe Portfolio</title>
        <meta name="description" content="Julia Roe / Graphic Designer / Environmental Design" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Outfit:300,400,600,700&amp;lang=en" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lora:300,400,600,700&amp;lang=en" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Gallery projects={data.projects} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://juliaroe.com';
  const res = await fetch(`${server}/projects.json`);
  const data = await res.json();

  return { props: { data }}
}
