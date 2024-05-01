import React from 'react';
import PropTypes from 'prop-types'; // Add import statement for PropTypes

import styled from 'styled-components';

const StyledLayout = styled.div`
  margin: auto;
  padding: 16px;
  width: 100%;
  max-width: 600px;
  border: 1px solid red;
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
