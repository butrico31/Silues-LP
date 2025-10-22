import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const windRef = useRef(null);
  const windWrapRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    // proteção para SSR/ambientes sem window
    if (typeof window === 'undefined') return;

    const el = windRef.current;
    const wrap = windWrapRef.current;
    const section = sectionRef.current;
    if (!el || !wrap || !section) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.matchMedia && window.matchMedia('(max-width: 900px)').matches;
    // não inicializa a animação se o usuário prefere reduzir movimento ou se for mobile/tablet
    if (prefersReduced || isSmall) return;

    const drop = section.getBoundingClientRect().height * 0.5;

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: wrap,
        start: 'top center',
        endTrigger: section,
        end: 'top top'
      }
    });

    tl.to(el, { rotateZ: 360, y: drop, ease: 'none' });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Section id="products" ref={sectionRef}>
      <Container ref={windWrapRef}>

        <Left>
          <WindWrapper>
            <Wind ref={windRef} aria-hidden>
              <Blade style={{ transformOrigin: '50% 50%', transform: 'rotate(0deg) translateY(-36px)' }} />
              <Blade style={{ transformOrigin: '50% 50%', transform: 'rotate(120deg) translateY(-36px)' }} />
              <Blade style={{ transformOrigin: '50% 50%', transform: 'rotate(240deg) translateY(-36px)' }} />
            </Wind>
          </WindWrapper>
        </Left>

        <MiddleColumn>
          <h3>Silues Biquínis</h3>
          <p>
            Silues Biquinis produz e vende biquínis exclusivos que valorizam o corpo feminino com design sofisticado e atenção à qualidade premium. Nossas peças unem conforto, elegância e durabilidade, proporcionando uma experiência única para mulheres que buscam estilo aliado à funcionalidade. Com atendimento personalizado e entregas rápidas, garantimos satisfação total.
          </p>
          <h3>Diferenciais</h3>
          <p>Atendimento personalizado para cada cliente e entregas rápidas e confiáveis.</p>
          <DiffList>
            <DiffItem>
              <IconCircle><IconSVG /></IconCircle>
              <div>
                <strong>Atendimento personalizado</strong>
                <div>Suporte sob medida para suas necessidades</div>
              </div>
            </DiffItem>
            <DiffItem>
              <IconCircle><IconSVG /></IconCircle>
              <div>
                <strong>Entrega rápida</strong>
                <div>Logística otimizada e rastreamento</div>
              </div>
            </DiffItem>

            <DiffItem>
              <IconCircle><IconSVG /></IconCircle>
              <div>
                <strong>Design exclusivo</strong>
                <div>Modelagem feita para valorizar o corpo</div>
              </div>
            </DiffItem>
            <DiffItem>
              <IconCircle><IconSVG /></IconCircle>
              <div>
                <strong>Materiais premium</strong>
                <div>Alta qualidade e durabilidade</div>
              </div>
            </DiffItem>
          </DiffList>
        </MiddleColumn>
        <Right>
          <FakeImage>Imagem</FakeImage>
        </Right>
      </Container>
    </Section>
  )
}

function IconSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}



const Section = styled.section`
    --primary: #111111;
    --accent: #ff6600; /* laranja vibrante */
    --accent-2: #ffcc00; /* laranja claro */
    --muted: #6b6b6b;
    background: linear-gradient(180deg, #fff9f6 0%, #ffffff 100%);
    width: 100%;
    box-sizing: border-box;
    padding: 7vh 4vw;
    color: var(--primary);
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 180px 1fr 300px;
    gap: 28px;
    align-items: start;

    @media (max-width: 900px){
        grid-template-columns: 1fr;
        gap: 18px;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WindWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wind = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(255,255,255,0.1)), linear-gradient(180deg,#fff 0%, #fff6f2 100%);
    box-shadow: 0 10px 28px rgba(17,17,17,0.06);
    border: 1px solid rgba(255,102,0,0.06);

    @media (max-width: 900px){
        display: none;
    }
`;

const Blade = styled.div`
    position: absolute;
    width: 10%;
    height: 40%;
    background: linear-gradient(180deg,var(--accent),var(--accent-2));
    border-radius: 6px;
    box-shadow: 0 6px 18px rgba(255,102,0,0.12);
`;

const MiddleColumn = styled.div`
    box-sizing: border-box;
    h3{ font-size: 1.2rem; margin-bottom: 6px; color: var(--primary); }
    p{ font-size: 1rem; color: var(--muted); line-height: 1.6; margin-bottom: 14px; }
    @media (max-width: 900px){ padding: 0 4vw; }
`;

// ...existing code...
const DiffList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 18px;
  margin-top: 2rem;
  overflow: visible;
`;

const DiffItem = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  background: #fff;
  padding: 14px;
  border-radius: 12px;
  overflow: visible;
  z-index: 0;
  transition: transform 220ms ease, color 220ms ease;

  &::before {
    content: "";
    position: absolute;
    left: -12px;
    right: -12px;
    top: -12px;
    bottom: -12px;
    z-index: -2;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    -webkit-filter: blur(18px);
    filter: blur(18px);
    opacity: 0;
    transition: opacity 260ms ease, transform 260ms ease;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: -1;
    border-radius: calc(8px);
    background: #fff;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
  }

  &:hover::before {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IconCircle = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,var(--accent),var(--accent-2));
    color: #fff;


`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`;

const FakeImage = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    background: linear-gradient(180deg,#fff4f5,#fff);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    font-weight: 600;
`;

      