import React, { useContext } from 'react';
import LoungeContext from '../../../stores/LoungeStore';
import SortButton from '../../atoms/SortButton';
import StyledSortButtons from './styles';

export default function SortButtons() {
  const { sortType } = useContext(LoungeContext);

  return (
    <StyledSortButtons>
      <SortButton type="recent" text="최신" selected={sortType === 'recent'} />
      <SortButton type="best" text="베스트" selected={sortType === 'best'} />
    </StyledSortButtons>
  );
}
