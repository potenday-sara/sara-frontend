import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import StyledForm from './styles';

function Form({ children, ...rest }) {
  return (
    <StyledForm className="form" {...rest}>
      {children}
    </StyledForm>
  );
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

const Label = ({ children, className }) => {
  return cloneElement(children, { className });
};

const Input = ({ children, isError }) => {
  return cloneElement(children, {
    className: `${children.props.className} ${isError ? 'input input-error' : 'input'}`,
  });
};

function Error({ children, className }) {
  return children ? (
    cloneElement(children, { className: `alert form-error ${className}` })
  ) : (
    <div className={`alert ${className}`} />
  );
}

Error.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Error.defaultProps = {
  children: null,
  className: '',
};

const Button = ({ children }) => {
  return children;
};

Form.Label = Label;
Form.Input = Input;
Form.Error = Error;
Form.Button = Button;

export default Form;
