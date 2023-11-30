import React from 'react';
import PropTypes from 'prop-types';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import StyledSlider from './styles';
import QuestionCard from '../../atoms/QuestionCard';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

function Slider({ datas, type }) {
  return (
    <StyledSlider>
      <Swiper
        speed={3000}
        slidesPerView={3.5}
        loop
        touchRatio={0}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        direction="vertical"
        modules={[Autoplay]}
        className="mySwiper"
      >
        {datas?.map(({ content, product }, idx) => {
          return (
            <SwiperSlide key={('slider', [idx])}>
              <QuestionCard>
                <QuestionCard.Title>
                  <Text
                    label={product}
                    bold="lg"
                    size="lg"
                    color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
                  />
                </QuestionCard.Title>
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
