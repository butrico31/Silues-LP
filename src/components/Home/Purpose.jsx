import React from 'react';
import styled from 'styled-components';

export default function Purpose() {
  return (
    <Section id="purpose">
      <Inner>
        <Left>
          <Photo src="/2025-05-21.webp" alt="Fundadora" />
        </Left>
        <Right>
          <Kicker>Nosso Propósito</Kicker>
          <Title>Valorizar a Beleza e Autoconfiança da Mulher</Title>
          <Text>
            Fundada com o sonho de criar biquínis que celebram a beleza única de cada mulher, Silues Biquinis nasceu do compromisso em oferecer peças que unem exclusividade e conforto. Desde o início, dedicamos atenção cuidadosa a cada detalhe, buscando proporcionar uma experiência acolhedora e uma relação próxima com nossas clientes, valorizando sua autoestima e estilo.
          </Text>
          <Gallery>
            <Thumb src="/pop_frente_preto.webp" alt="Biquíni 1" />
            <Thumb src="/07-verde-agua-lado.webp" alt="Biquíni 2" />
            <Thumb src="/2.0-POP-TRAZ.webp" alt="Biquíni 3" />
          </Gallery>
          <Bullets>
            <li>Design pensado para o corpo real</li>
            <li>Tecido de alta qualidade e acabamento artesanal</li>
            <li>Atendimento personalizado para encontrar seu caimento</li>
          </Bullets>
        </Right>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 96px 16px;
  min-height: 520px;
  position: relative;
  
  @media (max-width: 800px) {
    padding: 48px 12px;
    min-height: auto;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 28px;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 18px;
    align-items: stretch;
  }
`;

const Left = styled.div``;

const Photo = styled.img`
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(255, 102, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 1;
`;

const Gallery = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Thumb = styled.img`
  width: 160px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: transform 240ms ease, box-shadow 240ms ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 102, 0, 0.16);
  }
  
  @media (max-width: 800px) {
    width: 100%;
    height: 160px;
  }
`;

const Bullets = styled.ul`
  margin-top: 14px;
  color: #555;
  font-family: 'Montserrat', sans-serif;
  
  li { 
    margin-bottom: 8px; 
    font-size: 1.05rem;
    line-height: 1.6;
    
    &::marker {
      color: #ff6600;
      font-size: 1.2rem;
    }
    
    @media (max-width: 800px){
      font-size: 0.95rem;
    }
  }
`;

const Right = styled.div``;

const Kicker = styled.div`
  color: #ff6600;
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  @media (max-width: 800px){
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.7rem;
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(135deg, #d42c30, #eb8e23);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  
  @media (max-width: 800px){
    font-size: 1.4rem;
  }
`;

const Text = styled.p`
  color: #555;
  line-height: 1.7;
  font-size: 1.05rem;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 800px){
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;
