import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styles';
import rocket from '../../../assets/temp/rocket.jpg';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

function Card({
  is_rocket: isRocket,
  product_image: img,
  product_name: label,
  product_price: price,
  product_url: productUrl,
  ...rest
}) {
  const sliceTitle = (str) => (str.length > 20 ? `${str.slice(0, 20)}...` : str);
  const localePrice = price.toLocaleString();
  return (
    <StyledCard onClick={() => rest.onClick(productUrl)}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      <div className="contents">
        <Text label={sliceTitle(label)} color={Theme.color.midGray} size="14px" bold="700" />
        <Text label={`${localePrice}원`} color={Theme.color.darkGray} size="16px" bold="500" />
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
  onClick: PropTypes.func,
  // category_name: PropTypes.string.isRequired,
  // is_free_shipping: PropTypes.bool.isRequired,
  is_rocket: PropTypes.bool.isRequired,
  // product_id: PropTypes.number.isRequired,
  product_image: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  product_price: PropTypes.number.isRequired,
  product_url: PropTypes.string.isRequired,
};

Card.defaultProps = {
  onClick: undefined,
};

export default Card;
