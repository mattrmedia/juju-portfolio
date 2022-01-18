import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { colors, fonts, grid } from '../styles/theme';

const StyledNav = styled.nav`
    ${grid};
    padding: .5rem;
`

const StyledLogo = styled.div`
    font-family: ${fonts.serif};
    font-size: 2rem;
`

const Julia = styled.span`
    color: #fff;
`

const Roe = styled.span`
    color: ${colors.primaryBright}
`

const Nav = styled.ul`
    color: #fff;
    display: inline-flex;

    li:not(:first-child) {
        padding-left: 3rem;
    }
`

export const Navigation = () => {
    return (
        <StyledNav>
                <StyledLogo>
                    <Julia>julia</Julia>
                    <Roe>roe</Roe>
                </StyledLogo>
                <Nav>
                    <li>
                        <Link href='#work'>
                            <a>work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#about'>
                            <a>about</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#resume'>
                            <a>resum&eacute;</a>
                        </Link>
                    </li>
                </Nav>
            </StyledNav>
    )
}