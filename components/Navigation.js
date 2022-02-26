import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { colors, fonts, grid } from '../styles/theme';
import { LinkedInIcon } from './LinkedInIcon';
import { HamburgerIcon } from './HamburgerIcon';

const StyledNav = styled.nav`
    ${grid};
    padding: 1rem;
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
    display: ${props => props.isMobile ? 'none' : 'inline-flex'};

    li {
        margin-top: .5rem;

        svg { fill: white; }
    }

    li:not(:first-of-type) {
        padding-left: 3rem;
    }

    @media(max-width: 600px) {
        align-content: center;
        background-color: rgba(247, 237, 226, .9);
        bottom: 0;
        display: ${props => props.isMobile ? 'flex' : 'none'};
        flex-direction: column;
        left: 0;
        justify-content: center;
        position: fixed;
        right: 0;
        top: 0;

        li {
            align-self: center;
            color: ${colors.primaryDark};
            display: block;
            margin-top: 0;
            margin-bottom: 1rem;
            font-size: 2rem;

            svg { fill: ${colors.primaryDark}; }
        }

        li:not(:first-of-type) {
            padding-left: 0;
        }
    }
`

const MobileHamburger = styled.div`
    display: none;

    svg { stroke: ${props => props.isMobile ? `${colors.primaryDark}` : 'white'}; }

    @media(max-width: 600px) {
        cursor: pointer;
        display: inline-flex;
        z-index: 1000;
        
    }
`

export const Navigation = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    useEffect(() => {
        if (showMobileNav) {
            document.body.classList.add('mobile-menu');
        } else {
            document.body.classList.remove('mobile-menu');
        }
    }, [showMobileNav])

    return (
        <StyledNav role="navigation" aria-label="site section navigation">
                <Link href="/">
                    <StyledLogo>
                        <Julia>julia</Julia>
                        <Roe>roe</Roe>
                    </StyledLogo>
                </Link>
                <MobileHamburger onClick={() => setShowMobileNav(!showMobileNav)} isMobile={showMobileNav} onKeyUp={() => setShowMobileNav(!showMobileNav)} tabIndex={-1}>
                    <HamburgerIcon viewBox={"0 0 100 100"} size={"40"}/>
                </MobileHamburger>
                <Nav isMobile={showMobileNav}>
                    <li onClick={() => (showMobileNav ? setShowMobileNav(!showMobileNav): {})}> 
                        <Link href='/#work'><a className={'link'} tabIndex={0}>work</a></Link>
                    </li>
                    <li onClick={() => (showMobileNav ? setShowMobileNav(!showMobileNav): {})}> 
                        <Link href='/#about'><a className={'link'} tabIndex={0}>about</a></Link>
                    </li>
                    <li onClick={() => (showMobileNav ? setShowMobileNav(!showMobileNav): {})}> 
                        <Link href='/#resume'><a target="_blank" href={'/assets/2022JuliaRoeResume.pdf'} className={'link'} tabIndex={0}>resum&eacute;</a></Link>
                    </li>
                    <li onClick={() => (showMobileNav ? setShowMobileNav(!showMobileNav): {})}> 
                        <Link href='/#linkedin'>  
                        <a target="_blank" href={'https://www.linkedin.com/in/julia-roe-23780779'} className={'link'} tabIndex={0}>
                            <LinkedInIcon viewBox={"0 0 40 40"} size={showMobileNav ? '40' : '20'} />
                        </a>
                        </Link>
                    </li>
                    
                </Nav>
            </StyledNav>
    )
}