import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import StyledTextarea from './styles';

export default function Textarea({ ph, isAutoHeight, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    if (isAutoHeight) {
      ref.current.style.height = 0;
      ref.current.style.height = `${rest.h + ref.current.scrollHeight}px`;
    }
  }, [rest.value]);

  return <StyledTextarea placeholder={ph} ref={ref} {...rest} rows={1} />;
}

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  isAutoHeight: PropTypes.bool,
  style: PropTypes.shape({}),
  onChnage: PropTypes.func,
  className: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ph: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  isAutoHeight: false,
  style: {},
  onChnage: undefined,
  className: '',
  w: '',
  h: '',
  ph: '',
};
