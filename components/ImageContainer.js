import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    width: 100vw;
    position: relative;
    margin-bottom: 3rem;
    max-height: 800px;
    overflow: hidden;

    @media(max-width: 400px) {
        margin-bottom: 2rem;
    }

    img {
        width: 100%;
        position: relative;
        object-fit: contain;
    }
`

export const ImageContainer = ({ image, width, altText }) => {
    return (
        <Container>
            <img
                src={image}
                alt={altText}
                width={width}
                height={'auto'}
                importance={'high'}
            />
        </Container>
    )
}