import React from 'react';
import PropTypes from 'prop-types';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import StyledSlider from './styles';
import QuestionCard from '../../atoms/QuestionCard';

function Slider({ datas, type }) {
  return (
    <StyledSlider>
      <div className="shadow" />
      <Swiper
        modules={[Autoplay]}
        className="mySwiper"
        speed={3000}
        slidesPerView="auto"
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
              <QuestionCard type={type}>
                <QuestionCard.Title label={product} />
                <QuestionCard.Contents label={content} />
              </QuestionCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSlider>
  );
}

Slider.propTypes = {
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

Slider.defaultProps = {
  datas: [],
};
export default Slider;
