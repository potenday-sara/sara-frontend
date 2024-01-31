import React from 'react';
import PropTypes from 'prop-types';
import StyledProgressbar from './styles';

export default function Progressbar({ label, ...rest }) {
  return (
    <StyledProgressbar {...rest}>
      <div className="progress" />
      {label}
    </StyledProgressbar>
  );
}

Progressbar.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  progress: PropTypes.number,
  direction: PropTypes.oneOf('right', 'left'),
  label: PropTypes.node,
  className: PropTypes.string,
  transition: PropTypes.string,
};

Progressbar.defaultProps = {
  w: '',
  h: '',
  bg: '',
  color: '',
  label: '',
  className: '',
  progress: 0,
  direction: 'left',
  transition: 'all 1s ease-in-out',
};
