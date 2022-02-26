import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { colors, grid, fonts } from '../styles/theme';

const ThumbnailContainer = styled.ul`
    ${grid}
    margin-bottom: 6rem;
    justify-content: center;
    gap: 3.25rem;

    @media(max-width: 1200px) {
        width: 90%;
    }

    @media (max-width: 400px) {
        display: block
        width: 90%;
    }
`

const Thumbnail = styled.li`
    border: 10px solid ${colors.primaryLight};
    cursor: pointer;
    flex: 0 1 400px;
    line-height: 0;
    max-height: 400px;
    transition: transform 250ms ease-in;

    &:hover {
        transform: scale(1.05);
    }

    a { display: block; }
`

const GalleryNav = styled.div`
    color: ${colors.primaryDark};
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;
    scroll-margin-top: 100px;
    width: 80%;

    button:not(:last-of-type) {
        padding: 0 2rem 0 0;

        @media(max-width: 400px) {
            padding: 0 1rem 0 0;
        }
    }

    button {
        border: none;
        background-color: transparent;
        color: ${colors.secondaryDark};
        cursor: pointer;
        font-family: ${fonts.serif};
        font-size: 1rem;
        margin-bottom: 2rem;

        @media(max-width: 400px) {
            margin-bottom: 1rem;
        }
    }

    @media(max-width: 600px) {
        overflow-y: auto;
        justify-content: initial;
        flex-wrap: initial;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`
const PROJECT_TYPES = {
    0: 'all',
    1: 'environmental',
    2: 'logo',
    3: 'publications',
    4: 'digital',
    5: 'illustration'
}

export const Gallery = ({projects}) => {
    const [projectType, setProjectType] = useState('all')

    const onClick = (e) => {
        const idx = [...e.target.parentElement.children].indexOf(e.target)
        setProjectType(PROJECT_TYPES[idx]);
    }

    const filteredProjects = projects.filter((project) => project.type.includes(projectType) || projectType === 'all');

    return (
        <>
            <GalleryNav id={'work'} onClick={onClick}>
                <button className={`link-btn ${projectType === 'all' ? 'selected' : ''}`}>all</button>
                <button className={`link-btn ${projectType === 'environmental' ? 'selected' : ''}`}>environmental</button>
                <button className={`link-btn ${projectType === 'logo' ? 'selected' : ''}`}>logo &amp; identity</button>
                <button className={`link-btn ${projectType === 'publications' ? 'selected' : ''}`}>publications &amp; layout</button>
                <button className={`link-btn ${projectType === 'digital' ? 'selected' : ''}`}>digital &amp; UI</button>
                <button className={`link-btn ${projectType === 'illustration' ? 'selected' : ''}`}>illustration</button>
            </GalleryNav>
            <ThumbnailContainer>
                <AnimatePresence>
                    {filteredProjects.map(project => (
                        <Thumbnail key={project.id} tabIndex={0}>
                            <Link href={`/projects/${project.id}`}>
                                <a>
                                    <Image
                                        src={project.thumbnail.src}
                                        alt={project.thumbnail.altText}
                                        height='400'
                                        width='400'
                                    />
                                </a>
                            </Link>
                        </Thumbnail>
                    ))}
                </AnimatePresence>
            </ThumbnailContainer>
        </>
    )
}

