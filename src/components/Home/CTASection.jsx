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
          <Thumbs>
            <Small src="/img/thumb1.jpg" alt="produto 1" />
            <Small src="/img/thumb2.jpg" alt="produto 2" />
            <Small src="/img/thumb3.jpg" alt="produto 3" />
          </Thumbs>
          <Button href="https://wa.me/5511987654321" target="_blank" rel="noreferrer">Falar com as Especialistas no WhatsApp</Button>
        </Actions>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(90deg, #ffd9e6, #fff1f6);
  padding: 72px 16px;
  min-height: 360px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background: linear-gradient(90deg,#ff66a0,#ffd700);
  color: #fff;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
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
