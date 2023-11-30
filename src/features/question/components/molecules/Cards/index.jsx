import React from 'react';
import PropTypes from 'prop-types';
import StyledCards from './styles';
import Card from '../../atoms/Card';

function Cards({ datas }) {
  return (
    <StyledCards>
      {datas.map((props, idx) => {
        return <Card key={['card', idx]} {...props} />;
      })}
    </StyledCards>
  );
}

Cards.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      price: PropTypes.string,
      img: PropTypes.node,
      isRocket: PropTypes.bool,
    }),
  ),
};

Cards.defaultProps = {
  datas: [],
};
export default Cards;
