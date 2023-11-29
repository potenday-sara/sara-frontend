import React from 'react';
import PropTypes from 'prop-types';
import { Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import StyledSlider from './styles';
// import QuestionCard from '../../atoms/QuestionCard';
// import Text from '../../../../../components/atoms/Text';
// import { Theme } from '../../../../../Styles';

function Slider({ datas }) {
  console.log(datas);
  return (
    <StyledSlider>
      <Swiper
        speed={2000}
        slidesPerView={3.5}
        touchRatio={0}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop
        direction="vertical"
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* {datas?.map(({ content, product }, idx) => {
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
        })} */}
      </Swiper>
    </StyledSlider>
  );
}

Slider.propTypes = {
  // type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  datas: PropTypes.arrayOf,
};

Slider.defaultProps = {
  datas: [],
};
export default Slider;
