import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledCounpoangRecommend from './styles';
import Text from '../../../../../components/atoms/Text';
import Logo from '../../../../../components/atoms/Logo';
import Title from '../../../../../components/molecules/Title';
import { Theme } from '../../../../../Styles';
import Select from '../../../../../components/molecules/Select';
import SelectInput from '../../../../../components/atoms/SelectInput';
import tempImage from '../../../assets/temp/buds.jpg';
import Cards from '../../molecules/Cards';

const tempOptions = [
  {
    value: '생활용품',
  },
  {
    value: 'IT',
  },
  {
    value: '생활용품',
  },
];
const tempDatas = [
  {
    label: '삼성 갤럭시 버즈갤럭시 버즈',
    price: '224,000원',
    img: tempImage,
    isRocket: false,
  },
  {
    label: '삼성 갤럭시 버즈',
    price: '224,000원',
    img: tempImage,
    isRocket: true,
  },
  {
    label: '삼성 갤럭시 버즈',
    price: '224,000원',
    img: tempImage,
    isRocket: false,
  },
  {
    label: '삼성 갤럭시 버즈',
    price: '224,000원',
    img: tempImage,
    isRocket: false,
  },
];

export default function CounpangRecommend({ type }) {
  const [value, setValue] = useState('생활용품');
  return (
    <StyledCounpoangRecommend>
      <Title style={{ gap: 0, padding: 0, marginBottom: 23 }}>
        <Logo
          w="77px"
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          style={{}}
        />
        <Text label=" , 요즘 많이 팔리는" size="16px" color={Theme.color.midGray} bold="700" />
        <Select
          options={tempOptions}
          setValue={setValue}
          style={{
            position: 'absolute',
            top: 16,
            right: 30,
          }}
          trigger={
            <SelectInput
              value={value}
              bg={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
              type={type}
            />
          }
        />
      </Title>
      <Cards datas={tempDatas} />
      <div className="bottom">
        <Text
          color={Theme.color.darkGray}
          label="*위 컨텐츠는 쿠팡 파트너스 활동의 일원으로 금전적 대가를 취할 수 있습니다"
          style={{
            color: `rgba(0,0,0,0.1)`,
            fontSize: 10,
          }}
        />
      </div>
    </StyledCounpoangRecommend>
  );
}

CounpangRecommend.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
