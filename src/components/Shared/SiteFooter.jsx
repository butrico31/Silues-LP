import React from 'react';
import styled from 'styled-components';

export default function SiteFooter() {
  return (
    <Footer>
      <Inner>
        <Col>
          <Social>
            <a style={{ width: '32px' }} href="https://instagram.com/siluesbiquinis" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="Instagram" /></a>
            <a style={{ width: '32px' }} href="https://facebook.com/siluesbiquinis" target="_blank" rel="noreferrer"><img src="/facebook.png" alt="Facebook" /></a>
          </Social>
          <Imr> Criado por <a href="https://imersa.com.br"><img style={{width:'124px'}} src="/logo-imersa.png" alt="" /></a></Imr>
        </Col>

        <Col>
          <Legal>Rua das Flores, 123, São Paulo, SP</Legal>
          <Legal>Telefone: +55 11 98765-4321</Legal>
          <Legal>CNPJ: 12.345.678/0001-99</Legal>
        </Col>

        <Col>

          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
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
  height: 25vh;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
`;

const Col = styled.div``;
const Brand = styled.h4``;
const Social = styled.div`
  display:flex; 
  gap:8px;
`;
const Legal = styled.div`
  color:#ddd;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover { color: #ffcc00; }
`;
const Imr = styled.div`
  a{ color:#ffd700 }
`;
