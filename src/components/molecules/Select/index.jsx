import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './styles';
import Text from '../../atoms/Text';

function Select({ trigger, options, setValue, ...rest }) {
  const [isModal, setIsModal] = useState(false);
  // useEffect(() => {
  //   document.body.addEventListener('click', () => setIsModal(false), true);
  //   return () => {
  //     document.body.removeEventListener('click', () => setIsModal(false), true);
  //   };
  // }, []);
  const changeValue = (e, { id, value }) => {
    e.stopPropagation();
    setValue(id, value);
    setIsModal(false);
  };

  return (
    <StyledSelect {...rest}>
      {cloneElement(trigger, { onClick: () => setIsModal((prev) => !prev) })}

      {isModal && (
        <div className="selects">
          {options?.map((data) => {
            return (
              <option
                key={['category', data.id]}
                onClick={(e) => changeValue(e, data)}
                className="option"
                value={data.value}
              >
                <Text label={data.value} size="16px" />
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
