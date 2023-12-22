import React, { cloneElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StyledDropdown, { StyledDropdownItem } from './styles';
import Text from '../Text';

function Dropdown({ trigger, children }) {
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const clickBody = () => {
      setShowDropdown(false);
    };
    document.body.addEventListener('click', clickBody, false);

    return () => {
      document.body.removeEventListener('click', clickBody, false);
    };
  }, []);

  const clickTrigger = (e) => {
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
  };
  return (
    <StyledDropdown>
      {cloneElement(trigger, { onClick: clickTrigger })}
      {showDropdown && <div className="selects">{children}</div>}
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

function Item({ label, ...rest }) {
  return (
    <StyledDropdownItem {...rest}>
      <Text label={label} size="16px" />
    </StyledDropdownItem>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Dropdown.Item = Item;

export default Dropdown;
