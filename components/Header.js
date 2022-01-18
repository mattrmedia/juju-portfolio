import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { colors } from '../styles/theme';
import { Navigation } from './Navigation';

import headerImage from '../public/assets/home-header-29.png';

const StyledHeader = styled.header`
    align-items: center;
    background-color: ${colors.primaryDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

export const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
            <Image
                src={headerImage}
                alt="Picture of organized wood type" 
            />
        </StyledHeader>
    )
}