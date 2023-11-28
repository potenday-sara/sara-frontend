import StyledSelectInput from './styles';
import { ReactComponent as ArrowBottom } from '../../../images/svgs/BottomArrow.svg';
import PropTypes from 'prop-types';
import Text from '../Text';
import { Theme } from '../../../Styles';

function SelectInput({ value, ...rest }) {
  return (
    <StyledSelectInput {...rest}>
      <input value={value} type="select" readOnly />
      <ArrowBottom className="icon" />
    </StyledSelectInput>
  );
}

SelectInput.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};

export default SelectInput;
