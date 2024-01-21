import React from 'react';
import PropTypes from 'prop-types';
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import StyledHorizonSlider from './styles';
import QuestionCard from '../../atoms/QuestionCard';

function HorizonSlider({ datas, type }) {
  return (
    <StyledHorizonSlider type={type}>
      <Swiper
        modules={[Autoplay]}
        className="mySwiper"
        speed={3000}
        slidesPerView={4.5}
        spaceBetween={1}
        loop
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        direction="vertical"
      >
        {datas?.map(({ content, product }, idx) => {
          return (
            <SwiperSlide key={('slider', [idx])}>
              <QuestionCard>
                <QuestionCard.Title label={product} type={type} />
                <QuestionCard.Contents label={content} />
              </QuestionCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledHorizonSlider>
  );
}

HorizonSlider.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      product: PropTypes.string,
      type: PropTypes.string,
      answer: PropTypes.string,
    }),
  ),
};

HorizonSlider.defaultProps = {
  datas: [],
};
export default HorizonSlider;
