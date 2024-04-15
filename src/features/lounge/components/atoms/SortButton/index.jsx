import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import LoungeContext from '../../../stores/LoungeStore';
import StyledSortButton from './styles';

export default function SortButton({ selected, text }) {
  const { setSort } = useContext(LoungeContext);

  const buttonHandler = () => {
    if (text === '베스트') return () => setSort('like');
    if (text === '최신') return () => setSort('time');
    return () => {};
  };

  return (
    <StyledSortButton $selected={selected} onClick={buttonHandler()}>
      {text}
    </StyledSortButton>
  );
}

SortButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
