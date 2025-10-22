import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);

    useEffect(() => {
        if (!gsap || !ScrollTrigger) return;
        gsap.registerPlugin(ScrollTrigger);

        const sentinel = document.getElementById('hero-end');
        if (!sentinel) return;

        const st = ScrollTrigger.create({
            trigger: '#hero-end',
            start: 'top top', // quando o topo de #hero-end atingir o topo da viewport
            onEnter: () => setScrolledPastHero(true),
            onLeaveBack: () => setScrolledPastHero(false),
        });

        // garantir estado inicial correto
        ScrollTrigger.refresh();

        return () => st && st.kill();
    }, []);

    const headerNode = (
        <Nav scrolled={scrolledPastHero}>
            <HeaderInner>
                <Brand to="/">Silues</Brand>

                <Links_containers>
                    <AnchorLink href="#home" onClick={(e) => scrollToId(e, 'home')}>Home</AnchorLink>
                    <AnchorLink href="#about" onClick={(e) => scrollToId(e, 'about')}>About</AnchorLink>
                    <AnchorLink href="#products" onClick={(e) => scrollToId(e, 'products')}>Products</AnchorLink>
                    <AnchorLink href="#contact" onClick={(e) => scrollToId(e, 'contact')}>Contact</AnchorLink>
                </Links_containers>

                <Burger aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)} open={open}>
                    <span />
                    <span />
                    <span />
                </Burger>

                <MobileMenu open={open} onClick={() => setOpen(false)}>
                    <MobileAnchor href="#home" onClick={(e) => scrollToId(e, 'home')}>Home</MobileAnchor>
                    <MobileAnchor href="#about" onClick={(e) => scrollToId(e, 'about')}>About</MobileAnchor>
                    <MobileAnchor href="#products" onClick={(e) => scrollToId(e, 'products')}>Products</MobileAnchor>
                    <MobileAnchor href="#contact" onClick={(e) => scrollToId(e, 'contact')}>Contact</MobileAnchor>
                </MobileMenu>
            </HeaderInner>
        </Nav>
    )

    // Render header via portal to document.body so position:fixed behaves correctly
    if (typeof document !== 'undefined') {
        return createPortal(headerNode, document.body)
    }

    return headerNode
}

/* smooth scroll helper */
function scrollToId(e, id){
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



const Links_containers = styled.div`
    display: flex;
    gap: 16px;
    padding: 10px 20px;
    border-radius: 20px;

    @media (max-width: 768px){
        display: none;
    }
`

const Nav = styled.nav`
    width: 100vw;
    position: fixed;
    top: 0;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30; /* maior que o z-index do filtro do Hero (0) */

    /* estilo padrão transparente */
    background: ${props => props.scrolled ? 'rgba(0,0,0,0.82)' : 'transparent'};
    backdrop-filter: ${props => props.scrolled ? 'blur(6px)' : 'none'};
    transition: background 320ms ease, backdrop-filter 320ms ease;
`;

const HeaderInner = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Brand = styled(NavLink)`
    color: #ffcc00; /* acento amarelo para o brand */
    font-weight: 700;
    text-decoration: none;
    font-size: 1.1rem;
`;

const Link = styled(NavLink)`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 8px;
    &:hover{ background: rgba(255,255,255,0.06); color: #ffcc00; }
`;

const AnchorLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 8px;
    &:hover{ background: rgba(255,255,255,0.06); color: #ffcc00; }
`;

/* Mobile menu styles */
const Burger = styled.button`
    display: none;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 28px;
        height: 22px;
        background: transparent;
        border: none;
        padding: 0;
        margin-left: 12px;
        z-index: 40;
        cursor: pointer;
    }

    span{
        display: block;
        height: 3px;
        background: #fff;
        border-radius: 2px;
        transition: transform 200ms ease, opacity 200ms ease;
    }

    /* animação quando aberto */
    ${props => props.open && `
        span:nth-child(1){ transform: translateY(9px) rotate(45deg); }
        span:nth-child(2){ opacity: 0; }
        span:nth-child(3){ transform: translateY(-9px) rotate(-45deg); }
    `}
`;

const MobileMenu = styled.div`
    display: none;
    @media (max-width: 768px){
        display: ${props => props.open ? 'flex' : 'none'};
        position: fixed;
        top: 75px;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.95);
        flex-direction: column;
        gap: 8px;
        padding: 16px 20px;
        z-index: 35;
    }
`;

const MobileLink = styled(NavLink)`
    color: #fff;
    padding: 12px 8px;
    text-decoration: none;
    border-radius: 8px;
    &:hover{ background: rgba(255,255,255,0.04); color: #ffcc00; }
`;

const MobileAnchor = styled.a`
    color: #fff;
    padding: 12px 8px;
    text-decoration: none;
    border-radius: 8px;
    &:hover{ background: rgba(255,255,255,0.04); color: #ffcc00; }
`;
