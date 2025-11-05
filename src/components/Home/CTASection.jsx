import React from 'react';
import styled from 'styled-components';

export default function CTASection() {
  return (
    <Section>
      <Inner>
        <TextWrapper>
          <Title>Quer conhecer nossas peças exclusivas?</Title>
          <Subtitle>Fale com nossas especialistas no WhatsApp e descubra o biquíni ideal para você.</Subtitle>
        </TextWrapper>
        <Actions>
          
          <Button href="https://wa.me/5511987654321" target="_blank" rel="noreferrer">Falar com as Especialistas no WhatsApp</Button>
        </Actions>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 72px 16px;
  min-height: 360px;
  position: relative;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

const TextWrapper = styled.div``;

const Title = styled.h3`
  margin: 0 0 6px 0;
  font-size: 1.3rem;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #444;
`;

const Actions = styled.div``;

const Button = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #ff6600 0%, #ff8833 50%, #ffcc00 100%);
  color: #fff;
  padding: 16px 32px;
  border-radius: 12px;
  margin-top: 48px;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(255, 102, 0, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 240ms ease, box-shadow 240ms ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 102, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Thumbs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Small = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid rgba(255,102,0,0.08);
`;
