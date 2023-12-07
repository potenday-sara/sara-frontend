import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styles';
import rocket from '../../../assets/temp/rocket.jpg';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

function Card({ isRocket, label, price, img }) {
  return (
    <StyledCard>
      <div
        className="image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      <div className="contents">
        <Text label={label} color={Theme.color.midGray} size="14px" bold="700" />
        <Text label={price} color={Theme.color.darkGray} size="16px" bold="500" />
        {isRocket && (
          <div
            className="rocket"
            style={{
              backgroundImage: `url(${rocket})`,
            }}
          />
        )}
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
