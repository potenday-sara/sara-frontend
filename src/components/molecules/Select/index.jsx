import StyledSelect from './styles';
import React, { cloneElement, useState } from 'react';
import { Theme } from '../../../Styles';
import SelectInput from '../../atoms/SelectInput';
import Text from '../../atoms/Text';

function Select({ type, trigger, options, setValue }) {
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
              <option
                onClick={() => changeValue(value)}
                className="option"
                value={value}
              >
                <Text label={value} color={Theme.color.darkGray} size={'md'} />
              </option>
            );
          })}
        </div>
      )}
    </StyledSelect>
  );
}

function Trigger({ children }) {
  return cloneElement(children, { className: 'trigger' });
}

export default Select;
