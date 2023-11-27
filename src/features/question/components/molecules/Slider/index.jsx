import React from 'react';
import PropTypes from 'prop-types';
import StyledSlider from './styles';
import QuestionCard from '../../atoms/QuestionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

const Slider = ({ datas, type }) => {
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
        loop={true}
        direction={'vertical'}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {datas?.map(({ content, product }, idx) => {
          return (
            <SwiperSlide key={idx}>
              <QuestionCard>
                <QuestionCard.Title>
                  <Text
                    label={product}
                    bold={'lg'}
                    size={'lg'}
                    color={
                      type === 'sara'
                        ? Theme.color.saraPrimary
                        : Theme.color.maraPrimary
                    }
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
};

export default Slider;
