import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { colors, grid, fonts } from '../styles/theme';

const GalleryContainer = styled.div`
    ${grid}
`

const ThumbnailContainer = styled.ul`
    ${grid}
    justify-content: center;
    gap: 3.25rem;
    @media (max-width: 400px) {
        display: block
    }
`

const Thumbnail = styled.li`
    cursor: pointer;
    flex: 0 1 400px;
`

const GalleryNav = styled.ul`
    color: ${colors.primaryDark};
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3rem 2rem 1rem;

    li:not(:first-of-type) {
        padding: 0 0 2rem 3rem;
    }

    li > button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: ${fonts.serif};
        font-size: 1rem;
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
        const idx = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement)
        setProjectType(PROJECT_TYPES[idx]);
    }

    const filteredProjects = projects.filter((project) => project.type.includes(projectType) || projectType === 'all');

    return (
        <>
            <GalleryNav id={'work'} onClick={onClick}>
                <li><button className={'link-btn'}>all</button></li>
                <li><button className={'link-btn'}>environmental</button></li>
                <li><button className={'link-btn'}>logo &amp; identity</button></li>
                <li><button className={'link-btn'}>publications &amp; layout</button></li>
                <li><button className={'link-btn'}>digital &amp; UI</button></li>
                <li><button className={'link-btn'}>illustration</button></li>
            </GalleryNav>
            <ThumbnailContainer>
                {filteredProjects.map(project => (
                    <Thumbnail key={project.id}>
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
            </ThumbnailContainer>
        </>
    )
}

