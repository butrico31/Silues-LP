import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
                <Brand to="/"><img style={{width:'86px'}} src="/Logo-Silues.webp" alt="" /></Brand>

                <Links_containers>
                    <AnchorLink to="products" smooth={true} duration={500} spy={true} offset={-80}>Produtos</AnchorLink>
                    <AnchorLink to="testimonials" smooth={true} duration={500} spy={true} offset={-80}>Depoimentos</AnchorLink>
                    <AnchorLink to="purpose" smooth={true} duration={500} spy={true} offset={-80}>Propósito</AnchorLink>
                    <AnchorLink to="contact" smooth={true} duration={500} spy={true} offset={-80}>Contato</AnchorLink>
                </Links_containers>

                <Burger aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)} open={open}>
                    <span />
                    <span />
                    <span />
                </Burger>

                <MobileMenu open={open} onClick={() => setOpen(false)}>
                    <MobileAnchor to="products" smooth={true} duration={500} spy={true} offset={-80}>Produtos</MobileAnchor>
                    <MobileAnchor to="testimonials" smooth={true} duration={500} spy={true} offset={-80}>Depoimentos</MobileAnchor>
                    <MobileAnchor to="purpose" smooth={true} duration={500} spy={true} offset={-80}>Propósito</MobileAnchor>
                    <MobileAnchor to="contact" smooth={true} duration={500} spy={true} offset={-80}>Contato</MobileAnchor>
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
    color: #ffcc00;
    font-weight: 700;
    text-decoration: none;
    font-size: 1.4rem;
    font-family: 'Dancing Script', cursive;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition: color 200ms ease, transform 200ms ease;
    
    &:hover {
        color: #ff8833;
        transform: scale(1.05);
    }
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

const AnchorLink = styled(ScrollLink)`
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 200ms ease;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    
    &:hover{ 
        background: rgba(255,204,0,0.15);
        color: #ffcc00; 
        transform: translateY(-1px);
    }
    
    &.active {
        color: #ffcc00;
        background: rgba(255,204,0,0.1);
    }
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

const MobileAnchor = styled(ScrollLink)`
    color: #fff;
    padding: 12px 8px;
    text-decoration: none;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    cursor: pointer;
    
    &:hover{ background: rgba(255,255,255,0.04); color: #ffcc00; }
    
    &.active {
        color: #ffcc00;
        background: rgba(255,255,255,0.06);
    }
`;
