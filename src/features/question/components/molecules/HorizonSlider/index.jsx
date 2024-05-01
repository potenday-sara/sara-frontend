import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import QuestionCard from '../../atoms/QuestionCard';
import StyledHorizonSlider from './styles';

function HorizonSlider({ datas, type }) {
  const navigate = useNavigate();
  return (
    <StyledHorizonSlider type={type}>
      <Swiper
        modules={[Autoplay]}
        className="mySwiper"
        speed={3000}
        slidesPerView="auto"
        spaceBetween="1px"
        loop
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {(datas || []).map(({ content, product, id, type: ttype }, idx) => {
          const navigte = () => navigate(`/lounge/community?questionId=${id}&type=${ttype}`);
          return (
            <SwiperSlide key={('slider', [idx])}>
              <QuestionCard onClick={navigte}>
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
