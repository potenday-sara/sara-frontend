import PropTypes from 'prop-types'; // Add import statement for PropTypes
import React from 'react';

import styled from 'styled-components';
import { Theme } from '../../../../../../Styles';

const StyledLayout = styled.div`
  position: relative;
  padding: 16px;
  z-index: 1;
  width: 100%;
  max-width: 375px;
  background-color: white;

  ${Theme.deviceSize.small} {
    max-width: 100%;
  }
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
