import React from 'react'
import Image from 'next/image';
import { Copyright } from './Copyright';
import styled from '@emotion/styled';
import { colors, fonts, grid } from '../styles/theme';

const FooterContainer = styled.div`
    background-color: ${colors.primaryLight};
    overflow: hidden;
    
    > div {
        display: flex;
        gap: 2rem;
        margin: 0 auto;
        padding: 3rem 0 0;
        width: 80%;

        @media(max-width: 1200px) {
            flex-direction: column;
        }
    }
`

const Headline = styled.h2`
    align-self: flex-start;
    font-family: ${fonts.serif};
    font-size: 1.75rem;
    border-bottom: 3px solid ${colors.highlight};
    color: ${colors.primaryDark};
    display: inline-block;
    margin: 0 0 2rem;
`

const FooterColumn = styled.div`
    display: inline-flex;
    flex-direction: column;
    flex: 1 0 49%;

    @media(max-width: 1200px) {
        order: 1;
    }

`

const ImageColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    flex: 1 0 49%;
    position: relative;
    align-content: flex-end;

    @media(max-width: 1200px) {
        order: 2;
    }

    > span:first-of-type {
        grid-column: 1 / -1;
        grid-row: 1;
        z-index: 1;
        left: 75px;
    }

    > span:last-of-type {
        grid-column: 1 / -1;
        grid-row: 1;
    }

    img {
        object-fit: contain;
    }
`

const Text = styled.p`
    font-size: 1rem;
    line-height: 1.75rem;
`

export const Footer = ({about, personal}) => {
    return (
        <FooterContainer>
            <div>
                <ImageColumn>
                    <Image
                        src={'/assets/julia.png'}
                        alt={'Headshot photograph of Julia Roe'}
                        height='600'
                        width='600'
                    />
                    <Image
                        src={'/assets/footer-bg.png'}
                        alt={"Background of colorful shapes and Julia written in script font"}
                        height='600'
                        width='600'
                    />
                </ImageColumn>
                <FooterColumn>
                    <Headline>about me</Headline>
                    <Text>{about}</Text>
                    <Text>{personal}</Text>
                    <Copyright />
                </FooterColumn>
            </div>
        </FooterContainer>
    )
}