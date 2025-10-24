import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import background from '../../assets/oi.webp'
import logo from '../../assets/Logo-Silues.webp'

export default function Hero() {
    const coverRef = useRef(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            if (coverRef.current) coverRef.current.style.display = 'none';
            return;
        }

        const el = coverRef.current;
        if (!el) return;

        gsap.to(el, {
            yPercent: -100,
            duration: 1.0,
            ease: 'power2.inOut',
            delay: 0.35,
            onComplete: () => {
                if (el) el.style.display = 'none';
            }
        });
    }, []);

    return (
        <Container>
            <EntryCover ref={coverRef} />

            <Filter>
                <FirstLineContainer id="home">
                    <LogoContainer>
                        <Logo src={logo} alt="Logo da Silues" />
                    </LogoContainer>
                    <LineTopVertical></LineTopVertical>
                    <TitleContainer>
                        <Title>Descubra o poder da <Gradient>exclusividade e conforto</Gradient> nos seus biquínis.</Title>
                    </TitleContainer>
                </FirstLineContainer>
                <LinesContainer>
                    <LineLeftHorizontal></LineLeftHorizontal>
                    <LineRightHorizontal></LineRightHorizontal>
                </LinesContainer>
                <SecondLineContainer id="about">

                    <VoidDiv></VoidDiv>
                    <LineBottomVertical></LineBottomVertical>
                </SecondLineContainer>
            </Filter>

            <div id="hero-end" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1 }} />
        </Container>
    )
}

const topHeight = '70vh';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    
`
const EntryCover = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #111 0%, #000 100%);
    z-index: 50;
`;
const Filter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
`

const Logo = styled.img`
    width: 400px;

    @media (max-width: 768px){
        width: 200px;
    }
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 45%;
    height: ${topHeight};

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        justify-content: center;
        padding: 12px 0;
    }
`

const LineTopVertical = styled.div`
    width: 1vh;
    height: 68vh;
    background-color: white;
    background-color: #ff6600;
    @media (max-width: 768px){
        display: none;
    }
`

const TitleContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: end;
    text-align: center;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        padding: 0 12px;
    }
`

const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
`

const Gradient = styled.span`
    background: linear-gradient(90deg, #ff6600, #ffcc00);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`

const LineBottomVertical = styled.div`
    width: 1vh;
    display: flex;
    height: 27vh;
    align-self: end;
    background-color: white;
    background-color: #ff6600;
    @media (max-width: 768px){
        display: none;
    }
`

const LineLeftHorizontal = styled.div`
    width: 44vw;
    height: 0.9vh;
    background-color: white;
    background-color: #ff6600;
    @media (max-width: 768px){
        display: none;
    }
`

const LineRightHorizontal = styled.div`
    width: calc(54vw - 1vh);
    height: 85%;
    background-color: white;
    background-color: #ff6600;
    @media (max-width: 768px){
        display: none;
    }
`

const FirstLineContainer = styled.div`
    height: ${topHeight};
    display: flex;
    flex-direction: row;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        align-items: center;
        gap: 12px;
    }

`

const SecondLineContainer = styled.div`
    height: 34vh;
    display: flex;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
`

const LinesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const VoidDiv = styled.div`
    width: 45%;

    @media (max-width: 768px){
        width: 100%;
    }
`

/* Placeholders simples abaixo do Hero para as seções linkadas */
export const BelowHero = styled.section`
    background: #fff;
    color: #111;
    padding: 80px 16px;
    text-align: center;
`;

// você pode inserir esses elementos na página Home.jsx se quiser um conteúdo real