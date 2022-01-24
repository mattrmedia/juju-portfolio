import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { colors } from '../styles/theme';
import { Navigation } from './Navigation';

const StyledHeader = styled.header`
    align-items: center;
    background-color: ${colors.primaryDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;
`

export const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
        </StyledHeader>
    )
}