import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header';
import { ImageContainer } from '../components/ImageContainer';
import { Gallery } from '../components/Gallery';

import headerImage from '../public/assets/home-header-29.png';

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ImageContainer image={headerImage} height={'675'} width={'1650'} />
        <Gallery projects={data.projects} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://juliaroe.com';
  const res = await fetch(`${server}/projects.json`);
  const data = await res.json();

  return { props: { data }}
}
