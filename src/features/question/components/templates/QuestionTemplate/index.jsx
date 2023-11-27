import React from 'react';
import PropTypes, { any } from 'prop-types';
// import ChatBoxLayout from '../../organisms/SaramarService';
import TrendItemsLayout from '../../../layouts/TrendItemsLayout';
import StyledQuestionTemplate from './styles';
import QuestionSlider from '../../organisms/QuestionSlider';

const datas = [
  {
    label: '에어팟 맥스',
    url: 'https://www.coupang.com/vp/products/4584075863?itemId=5623805740',
  },
  {
    label: '캡슐머신',
    url: 'https://www.coupang.com/vp/products/5498706730?itemId=3514317960',
  },
  {
    label: '크록스 샌들',
    url: 'https://www.coupang.com/vp/products/5772504897?itemId=9811525460',
  },
  {
    label: '무선 핸디 청소기',
    url: 'https://www.coupang.com/vp/products/5234137115?itemId=7375667237',
  },
  {
    label: '2L 생수 *6',
    url: 'https://www.coupang.com/vp/products/6830320694?itemId=16212148847',
  },
  {
    label: '미니 탁상용 선풍기',
    url: 'https://www.coupang.com/vp/products/1248989722?itemId=2247394025',
  },
  {
    label: '3단 트롤리',
    url: 'https://www.coupang.com/vp/products/1648550719?itemId=2809041456',
  },
];

export default function QuestionTemplate({ type, children }) {
  return (
    <StyledQuestionTemplate type={type}>
      <QuestionSlider type={type} articles={datas} />
      {children}
      <TrendItemsLayout type={type} />
    </StyledQuestionTemplate>
  );
}

QuestionTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  children: any,
};
