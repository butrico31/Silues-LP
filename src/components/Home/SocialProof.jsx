import React from 'react';
import styled from 'styled-components';
import SimpleCarousel from '../Shared/SimpleCarousel.jsx';

const samples = [
  { name: 'Mariana, 29', quote: 'A qualidade é incrível — meu biquíni favorito!', image: '/img/customer1.jpg' },
  { name: 'Ana, 34', quote: 'Atendimento impecável e modelagem perfeita.', image: '/img/customer2.jpg' },
  { name: 'Luiza, 24', quote: 'Me senti poderosa com a coleção nova.', image: '/img/customer3.jpg' },
  { name: 'Beatriz, 31', quote: 'O caimento valorizou meu corpo e me senti confiante.', image: '/img/customer4.jpg' },
  { name: 'Sofia, 27', quote: 'Peças com acabamento impecável e tecido confortável.', image: '/img/customer5.jpg' },
  { name: 'Beatriz, 31', quote: 'O caimento valorizou meu corpo e me senti confiante.', image: '/img/customer4.jpg' },
  { name: 'Beatriz, 31', quote: 'O caimento valorizou meu corpo e me senti confiante.', image: '/img/customer4.jpg' },
  { name: 'Beatriz, 31', quote: 'O caimento valorizou meu corpo e me senti confiante.', image: '/img/customer4.jpg' },
  { name: 'Beatriz, 31', quote: 'O caimento valorizou meu corpo e me senti confiante.', image: '/img/customer4.jpg' },
];

export default function SocialProof() {
  return (
    <Section>
      <Inner>
        <Title>Mulheres que Escolheram Silues Biquinis</Title>
        <Description>Depoimentos reais de clientes que amaram a experiência e a qualidade das peças.</Description>
        <CarouselWrap>
          <SimpleCarousel items={samples} />
        </CarouselWrap>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 72px 16px;
  position: relative;
  
  @media (max-width: 768px){
    padding: 48px 12px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 8px 0;
  color: #111;
  position: relative;
  z-index: 1;
  font-family: 'Blacksword', serif;
  background: linear-gradient(135deg, #ff6600, #ff8833, #ffcc00);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  
  @media (max-width: 768px){
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  margin: 0 0 18px 0;
  color: #555;
  position: relative;
  z-index: 1;
  font-size: 1.05rem;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px){
    font-size: 0.95rem;
  }
`;

const CarouselWrap = styled.div`
  background: transparent;
  padding: 8px 4px 0 4px;
  border-radius: 12px;
`;
