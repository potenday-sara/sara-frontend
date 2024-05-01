import PropTypes from 'prop-types'; // Add import statement for PropTypes
import React from 'react';

import styled from 'styled-components';

const StyledLayout = styled.div`
  margin: auto;
  padding: 16px;
  width: 100%;
  max-width: 600px;
  max-height: calc(100vh - 56px);
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
