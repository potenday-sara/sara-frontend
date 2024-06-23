import React, { useContext } from 'react';
import LoungeContext from '../../../stores/LoungeStore';
import SortButton from '../../atoms/SortButton';
import StyledSortButtons from './styles';

export default function SortButtons() {
  const { sortType } = useContext(LoungeContext);

  return (
    <StyledSortButtons>
      <SortButton type="time" text="최신" selected={sortType === 'time'} />
      <SortButton type="like" text="베스트" selected={sortType === 'like'} />
    </StyledSortButtons>
  );
}
