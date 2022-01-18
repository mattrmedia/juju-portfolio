import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { colors, grid } from '../styles/theme';

const ThumbnailContainer = styled.div`
    ${grid}
    @media (max-width: 400px) {
        display: block
    }
`

const Thumbnail = styled.div`
    flex: 0 1 300px;
`

export const Gallery = ({projects}) => {

    return (
        <ThumbnailContainer>
            {projects.map(project => {
                return (
                    <Thumbnail>
                        <Image
                            src={project.thumbnail.src}
                            alt={project.thumbnail.altText}
                            height='300'
                            width='300'
                        />
                    </Thumbnail>
                )
            })}
        </ThumbnailContainer>
    )
}

