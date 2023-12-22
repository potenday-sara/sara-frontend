import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';
import useTooltip from '../../../hooks/useTooltip';
import Tooltip from '../Tooltip';
import Text from '../Text';
import { Theme } from '../../../Styles';

export default function Button({ tooltip, tooltipText, children, type, ...rest }) {
  const { ref, isTooltip } = useTooltip();

  return (
    <StyledButton {...rest} type={type} ref={ref} className={`${rest.className} button`}>
      {children}
      {tooltip && isTooltip && (
        <Tooltip w="150px">
          <Text label={tooltipText} size="xs" color={Theme.color.white} />
        </Tooltip>
      )}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  w: PropTypes.string,
  m: PropTypes.string,
  h: PropTypes.string,
  bg: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  style: {},
  w: '',
  m: '',
  h: '',
  bg: '',
  tooltip: false,
  tooltipText: '',
};
