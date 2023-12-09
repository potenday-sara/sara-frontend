import React from 'react';
import PropTypes from 'prop-types';
import StyledCards from './styles';
import Card from '../../atoms/Card';

function Cards({ datas }) {
  const goCoupang = (url) => window.open(url);

  return (
    <StyledCards>
      {datas.map((props, idx) => {
        return <Card key={['card', idx]} {...props} onClick={goCoupang} />;
      })}
    </StyledCards>
  );
}

Cards.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      category_name: PropTypes.string,
      is_free_shipping: PropTypes.bool,
      is_rocket: PropTypes.bool.isRequired,
      product_id: PropTypes.number.isRequired,
      product_image: PropTypes.string.isRequired,
      product_name: PropTypes.string.isRequired,
      product_price: PropTypes.number.isRequired,
      product_url: PropTypes.string.isRequired,
    }),
  ),
};

Cards.defaultProps = {
  datas: [],
};
export default Cards;
