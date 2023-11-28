import React from 'react';
import PropTypes from 'prop-types';
import StyledSelectInput from './styles';
import { ReactComponent as ArrowBottom } from '../../../images/svgs/BottomArrow.svg';

function SelectInput({ value, ...rest }) {
  return (
    <StyledSelectInput {...rest}>
      <input value={value} type="select" readOnly />
      <ArrowBottom className="icon" />
    </StyledSelectInput>
  );
}

SelectInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};

SelectInput.defaultProps = {
  value: '값을입력해주세요',
};

export default SelectInput;
