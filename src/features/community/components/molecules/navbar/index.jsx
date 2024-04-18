import React from 'react';
import styled from 'styled-components';
// import Text from ';
import Text from '../../../../../components/atoms/Text';

const StyledNavbar = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Text label="하이" />
    </StyledNavbar>
  );
}
