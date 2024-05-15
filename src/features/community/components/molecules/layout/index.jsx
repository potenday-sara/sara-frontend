import PropTypes from 'prop-types'; // Add import statement for PropTypes
import React from 'react';

import styled from 'styled-components';

const StyledLayout = styled.div`
  position: relative;
  margin: auto;
  padding: 16px;
  z-index: 1;
  width: 100%;
  max-width: 375px;
  background-color: white;
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
