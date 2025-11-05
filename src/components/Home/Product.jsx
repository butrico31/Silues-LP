import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import biquini from '/10-pop-frente.webp';

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
        end: 'bottom bottom',
      }
    });

    const blades = el.querySelector && el.querySelector('#blades');
    if (blades) {

      gsap.set(blades, { transformOrigin: '50% 50%', transformBox: 'fillBox' });
      tl.to(blades, { rotation: 360, svgOrigin: '60 60', ease: 'none' }, 0);
    } else {
      // fallback: rotaciona o wrapper caso não encontre o grupo de lâminas
      tl.to(el, { rotateZ: 360, ease: 'none' }, 0);
    }

    // aplica o movimento de descida ao wrapper
    tl.to(el, { y: drop, ease: 'none' }, 0);

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
              <MillSVG />
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
          <Image src={biquini} alt="" />
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


function MillSVG() {
  return (
    <svg width="260" height="260" viewBox="-120 -120 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
        <linearGradient id="g-fold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent-2)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>

      <style>{`
        svg { --accent: #ff6600; --accent-2: #ffcc00; }
        .blade { fill: url(#g-accent); stroke: var(--accent); stroke-width: 2; }
        .fold  { fill: url(#g-fold);  stroke: var(--accent); stroke-width: 1.6; }
        .crease{ stroke: #7a3f00; stroke-width: 1.2; stroke-dasharray: 4 3; fill: none; opacity: .85; }
      `}</style>

      {/* PÁ CURVADA base */}
      <g>
        <path className="blade" d="M 0 0 C 28 -10, 56 -22, 92 -24 C 78 -6, 58 12, 34 28 C 22 34, 10 20, 0 0 Z" />
        <path className="fold" d="M 0 0 L 54 -20 L 22 16 Z" />
        <path className="crease" d="M 4 6 L 46 -14" />
      </g>

      {/* Demais pás */}
      <g transform="rotate(90)">
        <path className="blade" d="M 0 0 C 28 -10, 56 -22, 92 -24 C 78 -6, 58 12, 34 28 C 22 34, 10 20, 0 0 Z" />
        <path className="fold" d="M 0 0 L 54 -20 L 22 16 Z" />
        <path className="crease" d="M 4 6 L 46 -14" />
      </g>

      <g transform="rotate(180)">
        <path className="blade" d="M 0 0 C 28 -10, 56 -22, 92 -24 C 78 -6, 58 12, 34 28 C 22 34, 10 20, 0 0 Z" />
        <path className="fold" d="M 0 0 L 54 -20 L 22 16 Z" />
        <path className="crease" d="M 4 6 L 46 -14" />
      </g>

      <g transform="rotate(270)">
        <path className="blade" d="M 0 0 C 28 -10, 56 -22, 92 -24 C 78 -6, 58 12, 34 28 C 22 34, 10 20, 0 0 Z" />
        <path className="fold" d="M 0 0 L 54 -20 L 22 16 Z" />
        <path className="crease" d="M 4 6 L 46 -14" />
      </g>
    </svg>
  );
}



const Section = styled.section`
    --primary: #111111;
    --accent: #ff6600; /* laranja vibrante */
    --accent-2: #ffcc00; /* laranja claro */
    --muted: #6b6b6b;
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

    @media (max-width: 900px){
        display: none;
    }
`;

/* Blade styled-component removed in favor of inline SVG MillSVG */

const MiddleColumn = styled.div`
    box-sizing: border-box;
    h3{ 
        font-size: 1.5rem; 
        margin-bottom: 6px; 
        color: var(--primary);
        font-family: 'Dancing Script', cursive;
        background: linear-gradient(135deg, #d42c30, #eb8e23);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    p{ 
        font-size: 1rem; 
        color: var(--muted); 
        line-height: 1.6; 
        margin-bottom: 14px;
        font-family: 'Montserrat', sans-serif;
    }
    
    @media (max-width: 900px){ 
        padding: 0;
        
        h3 {
            font-size: 1.3rem;
        }
        
        p {
            font-size: 0.95rem;
        }
    }
`;

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
  gap: 1rem;
  align-items: flex-start;
  background: #fff;
  padding: 18px;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(255, 102, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 260ms ease, box-shadow 260ms ease;
  font-family: 'Montserrat', sans-serif;
  
  strong {
    color: #ff6600;
    font-size: 1.05rem;
    font-weight: 600;
  }
  
  div {
    font-size: 0.95rem;
    color: #666;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(255, 102, 0, 0.14), 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 900px){
    gap: 0.75rem;
    padding: 14px;
  }
`;

const IconCircle = styled.div`
    min-width: 52px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,var(--accent),var(--accent-2));
    color: #fff;
    flex-shrink: 0;
    
    @media (max-width: 900px){
        min-width: 42px;
        width: 42px;
        height: 42px;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    
    @media (max-width: 900px){
        max-width: 280px;
        margin: 0 auto;
    }
`;

const Image = styled.img`
    width: 100%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`;

      