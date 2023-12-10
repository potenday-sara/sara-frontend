import React, { cloneElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './styles';
import Text from '../../atoms/Text';

function Select({ trigger, options, setValue, ...rest }) {
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    const clickBody = () => {
      console.log('body');
      setIsModal(false);
    };
    document.body.addEventListener('click', clickBody, false);

    return () => {
      document.body.removeEventListener('click', clickBody, false);
    };
  }, []);
  const changeValue = (e, { id, value }) => {
    e.stopPropagation();
    setValue(id, value);
    setIsModal(false);
  };

  return (
    <StyledSelect {...rest}>
      {cloneElement(trigger, {
        onClick: (e) => {
          e.stopPropagation();
          setIsModal((prev) => !prev);
        },
      })}

      {isModal && (
        <div className="selects">
          {options?.map((data) => {
            return (
              <div
                key={['category', data.id]}
                role="presentation"
                onClick={(e) => changeValue(e, data)}
                className="option"
                value={data.value}
              >
                <Text label={data.value} size="16px" />
              </div>
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
