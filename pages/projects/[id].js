import { Header } from '../../components/Header';
import { ImageContainer } from '../../components/ImageContainer';
import styled from '@emotion/styled';
import styles from '../../styles/Home.module.scss'

const Info = styled.div`
    display: flex;
    flex-wrap;
    width: 80%;

    div {
        flex: 1 1 50%;
    }
`

const Project = ({ project }) => {
  return (
    <div className={styles.container}>
        <Header />
        <ImageContainer image={project.headerImage} height={'400'} width={'1650'} />
        <main className={styles.main}>
            <Info>
                <div>{project.problem}</div>
                <div>{project.solution}</div>
            </Info>
        </main>
    </div>
  )
}

export default Project;

export async function getStaticPaths() {
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3000' : 'https://juliaroe.com';
    const res = await fetch(
      `${server}/projects.json`
    );
    const data = await res.json();
    const paths = data.projects.map((project) => ({
        params: { id: project.id },
    }));

    return {
        paths,
        fallback: false // false or 'blocking'
    };
  }
  

export const getStaticProps = async ({params}) => {
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3000' : 'https://juliaroe.com';
    const res = await fetch(
      `${server}/projects.json`
    );
    const data = await res.json();
    const project = data.projects.filter(p => p.id === params.id)[0]
  
    return {
      props: {
        project,
      },
    };
  };