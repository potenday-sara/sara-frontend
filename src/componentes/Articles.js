import React, { useEffect, useRef, useState } from "react";

import { styled } from "styled-components";
import { MainText } from "../items/Text/Text";
import Article from "../items/Article/Article";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import required modules

const StyledArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* flex-direction: column; */
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  /* background-color: red; */

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
    transition-timing-function: linear;
  }
`;

export default function Articles({ $type, articles }) {
  let ref = useRef(null);
  useEffect(() => {
    ref?.current?.swiper.autoplay.pause();
    ref?.current?.swiper.autoplay.start();
  }, [ref]);
  return (
    <StyledArticles>
      <h2>다른 사람들은 어떤 고민이 있을까?</h2>
      <Swiper
        ref={ref}
        speed={3000}
        slidesPerView={3}
        autoplay={{
          delay: 10,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        direction={"vertical"}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {articles?.map((i, idx) => {
          return (
            <SwiperSlide key={idx}>
              {/* <h1>안녕</h1> */}
              <Article type={$type} label={i.object} text={i.solution} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledArticles>
  );
}
