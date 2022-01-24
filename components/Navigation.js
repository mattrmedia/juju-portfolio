import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { colors, fonts, grid } from '../styles/theme';

const StyledNav = styled.nav`
    ${grid};
    padding: .5rem;
`

const StyledLogo = styled.div`
    cursor: pointer;
    font-family: ${fonts.serif};
    font-size: 2rem;
`

const Julia = styled.span`
    color: #fff;
`

const Roe = styled.span`
    color: ${colors.primaryBright}
`

export const Nav = styled.ul`
    color: #fff;
    display: inline-flex;

    li:not(:first-child) {
        padding-left: 3rem;
    }
`

export const Navigation = () => {
    return (
        <StyledNav>
                <Link href="/">
                    <StyledLogo>
                        <Julia>julia</Julia>
                        <Roe>roe</Roe>
                    </StyledLogo>
                </Link>
                <Nav>
                    <li>
                        <Link href='/#work'>work</Link>
                    </li>
                    <li>
                        <Link href='/#about'>about</Link>
                    </li>
                    <li>
                        <Link href='/#resume'>resum&eacute;</Link>
                    </li>
                </Nav>
            </StyledNav>
    )
}