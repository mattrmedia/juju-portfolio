import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header';
import { ImageContainer } from '../components/ImageContainer';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';
import data from '../public/projects.json';

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ImageContainer image={'./assets/home-header-29.png'} height={'675'} width={'1650'} />
        <Gallery projects={data.projects} />
      </main>

      <footer className={styles.footer}  id={'about'}>
        <Footer about={data.about} personal={data.personal} />
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  return { props: { data }}
}
