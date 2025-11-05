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

        // Anima a cortina com onda subindo
        gsap.to(el, {
            yPercent: -100,
            duration: 1.2,
            ease: 'power2.inOut',
            delay: 0.35,
            onComplete: () => {
                if (el) el.style.display = 'none';
            }
        });
    }, []);

    return (
        <Container>
            <EntryCover ref={coverRef}>
                {/* Onda 1 - Mais profunda */}
                <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ bottom: '80px', opacity: 0.4, animationDelay: '0s' }}>
                    <path d="M0,40 C200,80 400,20 600,60 C800,100 1000,40 1200,70 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.15)" />
                </WaveSVG>
                
                {/* Onda 2 - Média */}
                <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ bottom: '40px', opacity: 0.5, animationDelay: '-1s' }}>
                    <path d="M0,20 C150,70 350,10 600,50 C850,90 1050,30 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.2)" />
                </WaveSVG>
                
                {/* Onda 3 - Superfície */}
                <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ bottom: '-2px', opacity: 0.7, animationDelay: '-2s' }}>
                    <path d="M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,80 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
                        </linearGradient>
                    </defs>
                </WaveSVG>
            </EntryCover>

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
    background: linear-gradient(180deg, #0d4f8b 0%, #1976d2 40%, #2196f3 70%, #4fc3f7 100%);
    z-index: 50;
    overflow: hidden;
`;

const WaveSVG = styled.svg`
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 120px;
    opacity: 0.7;
    animation: waveMove 3s ease-in-out infinite;

    @keyframes waveMove {
        0%, 100% {
            transform: translateX(0) scaleX(1);
        }
        50% {
            transform: translateX(-50px) scaleX(1.1);
        }
    }
`;
const Filter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 102, 0, 0.15) 0%, rgba(0, 0, 0, 0.45) 100%);
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

