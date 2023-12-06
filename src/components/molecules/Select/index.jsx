import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './styles';
import { Theme } from '../../../Styles';
import Text from '../../atoms/Text';

function Select({ trigger, options, setValue, ...rest }) {
  const [isModal, setIsModal] = useState(false);
  const changeValue = (value) => {
    setValue(value);
    setIsModal(false);
  };

  return (
    <StyledSelect {...rest}>
      {cloneElement(trigger, { onClick: () => setIsModal((prev) => !prev) })}

      {isModal && (
        <div className="selects">
          {options?.map(({ value }) => {
            return (
              <option onClick={() => changeValue(value)} className="option" value={value}>
                <Text label={value} color={'red'} size="16px" />
              </option>
            );
          })}
        </div>
      )}
    </StyledSelect>
  );
}

Select.propTypes = {
  trigger: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    }),
  ),
  setValue: PropTypes.func,
  style: PropTypes.shape({}),
};

Select.defaultProps = {
  options: [],
  style: {},
  setValue: undefined,
};

export default Select;
