import React, { useRef } from "react";

import { styled } from "styled-components";
import { MainText } from "../items/Text/Text";
import Article from "../items/Article/Article";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const StyledArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* flex-direction: column; */
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background-color: red; */

  .h2 {
    margin-bottom: 5px;
  }

  .div {
  }
  .swiper {
    * {
      margin: 0;
    }
    width: 100%;
  }
  .swiper-slide {
    /* height: 150px !important; */
  }
  .swiper-slide {
    width: auto;
    /* height: auto !important; */

    /* Center slide text vertically */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

export default function Articles() {
  const swiper = useRef("");

  const handleMouseEnter = (e) => {
    // console.log(e);
    // swiper.current.swiper.autoplay.stop();
  };
  const handleMouseLeave = () => {
    // swiper?.current?.swiper?.autoplay.start();
  };

  return (
    <StyledArticles>
      <MainText
        label={"다른 사람들은 어떤 고민이 있을까?"}
        type={"h2"}
        color="black"
      />
      <Swiper
        ref={swiper}
        slidesPerView={2}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        spaceBetween={80}
        loop={true}
        speed={3000}
        direction={"vertical"}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          1800: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
      >
        <SwiperSlide>
          <Article
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Article
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Article
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Article
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </SwiperSlide>
      </Swiper>
    </StyledArticles>
  );
}
