import React from 'react';
import styled from 'styled-components';

export default function SiteFooter(){
  return (
    <Footer>
      <Inner>
        <Col>
          <Brand>Silues Biquinis</Brand>
          <Social>
            <a href="https://instagram.com/siluesbiquinis" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com/siluesbiquinis" target="_blank" rel="noreferrer">Facebook</a>
          </Social>
        </Col>

        <Col>
          <Legal>Rua das Flores, 123, São Paulo, SP</Legal>
          <Legal>Telefone: +55 11 98765-4321</Legal>
          <Legal>CNPJ: 12.345.678/0001-99</Legal>
        </Col>

        <Col>
          <Imr> Criado por <a href="https://imersaprofile.example">Imersa</a></Imr>
        </Col>
      </Inner>
    </Footer>
  )
}

const Footer = styled.footer`
  background: #111;
  color: #fff;
  padding: 28px 16px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
`;

const Col = styled.div``;
const Brand = styled.h4``;
const Social = styled.div`
  display:flex; flex-direction:column; gap:8px;
`;
const Legal = styled.div`
  color:#ddd;
`;
const Imr = styled.div`
  a{ color:#ffd700 }
`;
