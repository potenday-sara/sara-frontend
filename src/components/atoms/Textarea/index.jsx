import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StyledTextarea from './styles';

export default function Textarea({ ph, isAutoHeight, ...rest }) {
  const [DefaultHeight, setDefaultHeight] = useState(0);

  const ref = useRef(null);
  const isRender = useRef(false);
  useEffect(() => {
    console.log(ref.current.style.height);
    setDefaultHeight(ref?.current?.style?.height);
  }, [ref.current]);
  useEffect(() => {
    if (isAutoHeight) {
      console.log(DefaultHeight);
      ref.current.style.height = DefaultHeight;
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [rest.value]);

  return <StyledTextarea placeholder={ph} ref={ref} {...rest} />;
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
