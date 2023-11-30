import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './styles';
import { Theme } from '../../../Styles';
import Text from '../../atoms/Text';

function Select({ trigger, options, setValue }) {
  const [isModal, setIsModal] = useState(false);
  const changeValue = (value) => {
    setValue(value);
    setIsModal(false);
  };

  return (
    <StyledSelect>
      {cloneElement(trigger, { onClick: () => setIsModal((prev) => !prev) })}

      {isModal && (
        <div className="selects">
          {options?.map(({ value }) => {
            return (
              <option onClick={() => changeValue(value)} className="option" value={value}>
                <Text label={value} color={Theme.color.darkGray} size="md" />
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
};

Select.defaultProps = {
  options: [],
  setValue: undefined,
};

export default Select;
