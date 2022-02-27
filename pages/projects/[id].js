import { Header } from '../../components/Header';
import { Copyright } from '../../components/Copyright';
import { ImageContainer } from '../../components/ImageContainer';
import { ImageGrid } from '../../components/ImageGrid';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import styles from '../../styles/Home.module.scss'
import { fonts } from '../../styles/theme';
import data from '../../public/projects.json';

const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;
    margin-bottom: 3rem;
    width: 60%;

    @media(max-width: 600px) {
        width: 80%;
    }

    div {
        flex: 1 1 48%;

        @media (max-width: 600px) {
            display: block;
            flex: 1 1 100%;
        }
    }
`

const Title = styled.h2`
    flex: 1 0 100%;
    font-family: ${fonts.serif};
    font-size: 2rem;
    margin: 0 0 3rem;

    @media(max-width: 400px) {
        font-size: 1.5rem;
        margin: 0 0 2rem;
    }
`

const Subtitle = styled.h3`
    font-family: ${fonts.serif};
    margin: 0 0 1rem;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
`

const Project = ({ project }) => {

  return (
    <div className={styles.container}>
        <Header />
        <main className={styles.main}>
            <ImageContainer image={project.headerImage.src} altText={project.headerImage.altText} height={'600'} width={'1650'} objectFit="contain" priority={true} />
            <Info>
                <Title>{parse(project.title)}</Title>
                {project.problem.length ?
                    <div>
                        <Subtitle>problem:</Subtitle>
                        <p>{project.problem}</p>
                    </div>
                    : null
                }
                {project.solution.length ?
                    <div>
                        <Subtitle>solution:</Subtitle>
                        <p>{project.solution}</p>
                    </div>
                    : null
                }
            </Info>
            <ImageGrid images={project.images} />
        </main>
        <Footer>
            <Copyright />
        </Footer>
    </div>
  )
}

export default Project;

export async function getStaticPaths() {
    const paths = data.projects.map((project) => ({
        params: { id: project.id },
    }));

    return {
        paths,
        fallback: false // false or 'blocking'
    };
  }
  

export const getStaticProps = async ({params}) => {
    const project = data.projects.filter(p => p.id === params.id)[0]
  
    return {
      props: {
        project,
      },
    };
  };