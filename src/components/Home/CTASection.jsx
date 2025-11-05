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
  
  @media (max-width: 768px){
    padding: 48px 12px;
    min-height: auto;
  }
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
  font-size: 1.6rem;
  font-family: 'Blacksword', serif;
  background: linear-gradient(135deg, #ff6600, #ff8833, #ffcc00);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  
  @media (max-width: 768px){
    font-size: 1.3rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px){
    font-size: 0.95rem;
  }
`;

const Actions = styled.div``;

const Button = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #ff6600 0%, #ff8833 50%, #ffcc00 100%);
  color: #fff;
  padding: 18px 40px;
  border-radius: 14px;
  margin-top: 48px;
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(255, 102, 0, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 240ms ease, box-shadow 240ms ease;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Franklin Gothic Medium', Arial, sans-serif;
  text-align: center;
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(255, 102, 0, 0.45), 0 6px 18px rgba(0, 0, 0, 0.18);
  }
  
  &:active {
    transform: translateY(-1px) scale(1);
  }
  
  @media (max-width: 768px){
    padding: 14px 24px;
    font-size: 0.95rem;
    margin-top: 32px;
    letter-spacing: 0.3px;
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
