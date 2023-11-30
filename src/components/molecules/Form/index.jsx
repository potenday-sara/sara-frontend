import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './styles';

function Form({ children, ...rest }) {
  return <StyledForm {...rest}>{children}</StyledForm>;
}

Form.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  children: null,
  style: {},
};

const Label = ({ children }) => {
  return children;
};

const Input = ({ children }) => {
  return children;
};

const Button = ({ children }) => {
  return children;
};

Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default Form;
