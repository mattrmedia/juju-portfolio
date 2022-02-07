import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { colors, fonts, grid } from '../styles/theme';

const StyledNav = styled.nav`
    ${grid};
    padding: .5rem;

    @media(max-width: 400px) {
        justify-content: center;
    }
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

    li {
        margin-top: .5rem;
    }

    li:not(:first-of-type) {
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
                        <Link href='/#work'><a className={'link'} tabIndex={0}>work</a></Link>
                    </li>
                    <li> 
                        <Link href='/#about'><a className={'link'} tabIndex={0}>about</a></Link>
                    </li>
                    <li>
                        <Link href='/#resume'><a className={'link'} tabIndex={0}>resum&eacute;</a></Link>
                    </li>
                </Nav>
            </StyledNav>
    )
}