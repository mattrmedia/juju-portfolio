import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/theme';
import { Navigation } from './Navigation';

const StyledHeader = styled.header`
    align-items: center;
    background-color: ${colors.primaryDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
`

export const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
        </StyledHeader>
    )
}