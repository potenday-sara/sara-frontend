import React, { useEffect, useRef, useState } from "react";

import { styled } from "styled-components";
import { MainText } from "../items/Text/Text";
import Article from "../items/Article/Article";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import { useQuery } from "react-query";
import { getQuestions, getRangking } from "../apis";

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

export default function Articles({ $type }) {
  const { isLoading, data } = useQuery([$type, "RankQuestions"], () =>
    getQuestions($type)
  );
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(data?.data?.data);
  }, [isLoading, data]);

  return (
    <StyledArticles>
      <MainText
        label={"다른 사람들은 어떤 고민이 있을까?"}
        type={"h2"}
        color="black"
      />
      <Swiper
        slidesPerView={2}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={80}
        loop={true}
        speed={3000}
        direction={"vertical"}
        modules={[Autoplay, Navigation]}
        // observer={true}
        // observeParents={true}
        className="mySwiper"
        breakpoints={{
          1800: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
      >
        {isLoading === false
          ? data.data.data.map((i, idx) => {
              return (
                <>
                  <SwiperSlide key={`slider${$type}${idx}`}>
                    {/* <div></div> */}
                    <Article type={$type} label={i.object} text={i.solution} />
                  </SwiperSlide>
                </>
              );
            })
          : null}
      </Swiper>
    </StyledArticles>
  );
}
