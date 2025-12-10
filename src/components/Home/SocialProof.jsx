import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'Mariana, 29', quote: 'A qualidade é incrível — meu biquíni favorito!' },
  { name: 'Ana, 34', quote: 'Atendimento impecável e modelagem perfeita.' },
  { name: 'Luiza, 24', quote: 'Me senti poderosa com a coleção nova.' },
];

export default function SocialProof() {
  return (
    <Section id="testimonials">
      <Inner>
        <Title>Mulheres que Escolheram Silues Biquinis</Title>
        <Description>Depoimentos reais de clientes que amaram a experiência e a qualidade das peças.</Description>
        
        <DesktopGrid>
          {testimonials.map((item, index) => (
            <Card key={index}>
              <Quote>"{item.quote}"</Quote>
              <Author>{item.name}</Author>
            </Card>
          ))}
        </DesktopGrid>

        <MobileCarousel>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Card>
                  <Quote>"{item.quote}"</Quote>
                  <Author>{item.name}</Author>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </MobileCarousel>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 72px 16px;
  position: relative;
  border-top: 2px dashed #d42c30;
  border-bottom: 2px dashed #d42c30;
  background: linear-gradient(135deg, #fff5eb 0%, #ffe8dc 100%);

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
  position: relative;
  z-index: 1;
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(135deg, #d42c30, #eb8e23);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  
  @media (max-width: 768px){
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  margin: 0 0 18px 0;
  color: #5a1f22;
  position: relative;
  z-index: 1;
  font-size: 1.05rem;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 768px){
    font-size: 0.95rem;
  }
`;

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;

  @media (max-width: 968px){
    display: none;
  }
`;

const MobileCarousel = styled.div`
  display: none;
  margin-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 968px){
    display: block;
  }

  .swiper-pagination-bullet {
    background: #d42c30;
  }

  .swiper-pagination-bullet-active {
    background: #eb8e23;
  }
`;

const Card = styled.div`
  padding: 32px 24px;
  background: #ffffff;
  border: 2px dashed #d42c30;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 300ms ease;

  &:hover {
    border-color: #eb8e23;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(212, 44, 48, 0.3);
    background: #fff8f0;
  }
`;

const Quote = styled.div`
  font-size: 1.1rem;
  color: #5a1f22;
  font-style: italic;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  flex: 1;
`;

const Author = styled.div`
  font-size: 0.95rem;
  background: linear-gradient(135deg, #d42c30, #eb8e23);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;
