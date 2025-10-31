import React from 'react';
import styled from 'styled-components';

export default function Purpose() {
  return (
    <Section>
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
            <Thumb src="/pop_frente_preto.webp" alt="atelier 1" />
            <Thumb src="/07-verde-agua-lado.webp" alt="atelier 2" />
            <Thumb src="/2.0-POP-TRAZ.webp" alt="atelier 3" />
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
  background: #fff;
  min-height: 520px;
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
  border-radius: 12px;
  object-fit: cover;
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
  border-radius: 8px;
  @media (max-width: 800px) {
    width: 100%;
    height: 160px;
  }
`;

const Bullets = styled.ul`
  margin-top: 14px;
  color: #444;
  li { margin-bottom: 6px; }
`;

const Right = styled.div``;

const Kicker = styled.div`
  color: #ff6600;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.4rem;
`;

const Text = styled.p`
  color: #444;
  line-height: 1.6;
`;
