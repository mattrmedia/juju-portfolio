import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const IMAGE_WIDTHS = {
    'full': '1200',
    'half': '600',
    'third': '300'
}

const IMAGE_HEIGHTS = {
    'full': '600',
    'half': '600',
    'third': '300'
}

const getWidth = (width) => {
    return IMAGE_WIDTHS[width];
}

const getHeight = (width) => {
    return IMAGE_HEIGHTS[width];
}

const ImagesContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 80%;
    margin-bottom: 3rem;
`

export const ImageGrid = ({images}) => {
    return (
        <ImagesContainer>
            {images.map((image, idx) =>  <Image key={`image-${idx}`} src={image.src} width={getWidth(image.grid)} height={getHeight(image.grid)} objectFit="contain" />)}
        </ImagesContainer>
    )
}