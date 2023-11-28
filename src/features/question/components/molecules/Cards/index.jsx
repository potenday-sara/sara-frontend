import React from 'react';
import PropTypes from 'prop-types';
import StyledCards from './styles';
import TrendItem from '../../TrendItem';
import Card from '../../atoms/Card';

function Cards({ datas }) {
  return (
    <StyledCards>
      {datas.map((props, idx) => {
        return <Card {...props} />;
      })}
    </StyledCards>
  );
}

Cards.propTypes = {
  datas: PropTypes.array,
};
export default Cards;
