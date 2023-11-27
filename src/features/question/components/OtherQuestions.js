import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import OtherQuestion from './OtherQuestion';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';

const StyledArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .h2 {
    margin-bottom: 5px;
  }

  .swiper {
    * {
      margin: 0;
    }
    width: 100%;
  }

  .swiper-wrapper {
    height: 100px;
    transition-timing-function: linear;
  }
`;

export default function OtherQuestions({ $type, articles }) {
  return (
    <StyledArticles>
      <h2>다른 사람들은 어떤 고민이 있을까?</h2>
      <Swiper
        // ref={ref}
        speed={3000}
        slidesPerView={3}
        autoplay={{
          delay: 10,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        direction={'vertical'}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {articles?.map((i, idx) => {
          return (
            <SwiperSlide key={idx}>
              {/* <h1>안녕</h1> */}
              <OtherQuestion type={$type} label={i.object} text={i.solution} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledArticles>
  );
}

OtherQuestions.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
