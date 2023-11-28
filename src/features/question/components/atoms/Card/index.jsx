import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styles';
import rocket from '../../../assets/temp/rocket.jpg';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

function Card({ isRocket, label, price, img }) {
  return (
    <StyledCard>
      <div className="image">
        <img src={img} alt="..." />
      </div>
      <div className="contents">
        <Text
          label={label}
          color={Theme.color.darkGray}
          bold="lg"
          style={{
            lineHeight: 1.2,
          }}
        />
        <Text label={price} color={Theme.color.gray} />
        {isRocket && <img src={rocket} alt="..." width="70px" />}
      </div>
    </StyledCard>
  );
}

Card.propTypes = {
  isRocket: PropTypes.bool,
  label: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.node,
};

Card.defaultProps = {
  isRocket: false,
  img: null,
  label: '',
  price: '',
};
export default Card;
