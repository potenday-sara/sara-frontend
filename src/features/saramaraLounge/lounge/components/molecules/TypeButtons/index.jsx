import React, { useContext } from 'react';
import LoungeContext from '../../../stores/LoungeStore';
import TypeButton from '../../atoms/TypeButton';
import StyledTypeButtons from './styles';

export default function TypeButtons() {
  const { type } = useContext(LoungeContext);

  return (
    <StyledTypeButtons>
      <TypeButton type="all" selected={type === 'all'} />
      <TypeButton type="sara" selected={type === 'sara'} />
      <TypeButton type="mara" selected={type === 'mara'} />
    </StyledTypeButtons>
  );
}
