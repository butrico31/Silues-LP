import React from 'react';
import styled from 'styled-components';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper modules (import from module paths to avoid bundler/export issues)
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
// Navigation styles
import 'swiper/css/navigation';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function SimpleCarousel({ items = [], interval = 4500 }) {
  if (!items || items.length === 0) return null;

  return (
    <Wrap>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: interval, disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }}
      >
        {items.map((it, i) => (
          <SwiperSlide key={i}>
            <Slide>
              {it.image && <Img src={it.image} alt={it.name || ''} />}
              <Copy>
                <Quote>“{it.quote}”</Quote>
                <Author>{it.name}</Author>
              </Copy>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;

  .swiper-slide {
    width: 320px;
    transition: transform 0.4s ease;
  }

  .swiper-slide-active {
    transform: scale(1.1);
    z-index: 2;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.85);
    opacity: 0.7;
  }

  .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
    transform: scale(0.7);
    opacity: 0.5;
  }
`;

const Slide = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  min-height: 200px;
  transition: all 0.4s ease;
`;

const Img = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
`;

const Copy = styled.div`
  flex: 1;
  width: 100%;
`;

const Quote = styled.div`
  font-size: 1rem;
  color: #222;
  margin-bottom: 8px;
`;

const Author = styled.div`
  font-size: 0.9rem;
  color: #666;
`;
