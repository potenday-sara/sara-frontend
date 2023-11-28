import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { BasicText } from '../../../components/Text/Text';
import TextLogo from '../../../components/Logo/TextLogo';
import TrendItem from '../components/TrendItem';

const StyledTrendItemLayout = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  margin-right: auto;
  border-radius: 24px;
  max-width: 394px;
  height: 715px;
  padding: 20px 16px;
  border: 1px solid #ddd;

  .title {
    display: flex;
    gap: 5px;
  }
  .trend-items {
    margin-top: 23px;
    display: grid;
    gap: 12px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

export default function TrendItemLayout({ $type }) {
  return (
    <StyledTrendItemLayout $type={$type}>
      <div className="title">
        <TextLogo $type={$type} $fill={$type === 'sara' ? 'blue' : 'red'} />
        <BasicText label={'닭가슴살'} />
        <BasicText label={'요즘 많이 팔리는'} />
      </div>
      <div className="trend-items">
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </div>
    </StyledTrendItemLayout>
  );
}

TrendItemLayout.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
