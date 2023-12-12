import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import StyledSelect, { StyledList } from './styles';

function Select({ onChange, children, value, ...rest }) {
  return (
    <StyledSelect {...rest}>
      <input type="hidden" onChange={onChange} value={value} />
      {children}
    </StyledSelect>
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
};

Select.defaultProps = {
  onChange: () => {},
  style: {},
};

function List({ children, cssstyle }) {
  return <StyledList cssstyle={cssstyle}>{children}</StyledList>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  cssstyle: PropTypes.shape({}),
};
List.defaultProps = {
  cssstyle: {},
};

Select.List = List;

export default Select;
