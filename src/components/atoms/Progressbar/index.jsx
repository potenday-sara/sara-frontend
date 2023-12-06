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
  label: PropTypes.node,
};

Progressbar.defaultProps = {
  w: '',
  h: '',
  bg: '',
  color: '',
  label: '',
  progress: 0,
};
