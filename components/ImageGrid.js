import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const IMAGE_WIDTHS = {
    'full': '100%',
    'half': '48%',
    'third': '31%'
}

const getWidth = (width) => {
    return IMAGE_WIDTHS[width];
}

const ImagesContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: inline-flex;
    flex-wrap: wrap;
    position: relative;
    gap: 2rem;
    width: 60%;
    margin-bottom: 3rem;

    @media (max-width: 600px) {
        width: 90%;
    }

    .custom-img {
        width: 100% !important;
        position: relative !important;
        height: unset !important;
      }

      > div > span {
        position: unset !important;
      }
`

const ResetImage = styled.div`
    width: ${props =>   props.width};
`

export const ImageGrid = ({images}) => {
    return (
        <ImagesContainer>
            {images.map((image, idx) =>  <ResetImage key={`img-${idx}`} width={getWidth(image.grid)}><Image className={'custom-img'} src={image.src} layout='fill' objectFit="contain" /></ResetImage>)}
        </ImagesContainer>
    )
}