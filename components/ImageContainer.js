import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div`
    width: 100vw;
    position: relative;
    margin-bottom: 3rem;

    @media(max-width: 400px) {
        margin-bottom: 2rem;
    }

    img {
        width: 100%;
        position: relative;
    }
`

export const ImageContainer = ({ image, height, width, altText }) => {
    return (
        <Container>
            <Image
                src={image}
                alt={altText}
                width={width}
                height={height}
                layout='responsive'
                objectFit='cover'
                priority={true}
            />
        </Container>
    )
}