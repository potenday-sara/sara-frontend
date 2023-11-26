import React from 'react';
import StyledForm from './styles';
import PropTypes from 'prop-types';

function Form({ children, ...rest }) {
  return <StyledForm {...rest}>{children}</StyledForm>;
}

Form.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
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
