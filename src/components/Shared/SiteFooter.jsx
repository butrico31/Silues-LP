import React from 'react';
import styled from 'styled-components';

export default function SiteFooter() {
  return (
    <Footer>
      <Inner>
        <Col>
          <Social>
            <a style={{ width: '32px' }} href="https://instagram.com/siluesbiquinis" target="_blank" rel="noreferrer"><Img src="/instagram.svg" alt="Instagram" /></a>
            <a style={{ width: '32px' }} href="https://facebook.com/siluesbiquinis" target="_blank" rel="noreferrer"><Img src="/facebook.svg" alt="Facebook" /></a>
          </Social>
          <Imr> Criado por <a href="https://imersa.com.br"><img style={{ width: '124px' }} src="/logo-imersa.png" alt="" /></a></Imr>
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


const Img = styled.img`
`;

const Footer = styled.footer`
  background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
  color: #fff;
  padding: 48px 16px 28px 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6600 0%, #ffcc00 50%, #ff6600 100%);
  }
  
  @media (max-width: 768px){
    padding: 32px 16px 24px 16px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  height: 25vh;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px){
    flex-direction: column;
    height: auto;
    gap: 32px;
  }
`;

const Col = styled.div``;
const Brand = styled.h4``;
const Social = styled.div`
  display:flex; 
  gap:8px;
  
  a {
    display: inline-block;
    transition: transform 200ms ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Legal = styled.div`
  color: #ddd;
  font-size: 0.95rem;
  line-height: 1.7;
  font-family: 'Montserrat', sans-serif;
  
  &:first-child {
    background: linear-gradient(135deg, #d42c30, #eb8e23);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 600;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const NavLink = styled.a`
  color: #ddd;
  text-decoration: none;
  padding: 6px 0;
  font-size: 1rem;
  transition: all 200ms ease;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  
  &:hover { 
    background: linear-gradient(135deg, #d42c30, #eb8e23);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transform: translateX(4px);
  }
`;
const Imr = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(135deg, #d42c30, #eb8e23);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 500;
  
  a { 
    color: #ffd700;
    transition: transform 200ms ease;
    display: inline-flex;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;
