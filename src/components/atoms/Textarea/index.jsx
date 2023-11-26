import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StyledTextarea from './styles';

export default function Textarea({ ph, isAutoHeight, id, ...rest }) {
  const ref = useRef(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (isAutoHeight) {
      ref.current.style.height = 0;
      ref.current.style.height = rest.h + ref.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <StyledTextarea
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={ph}
      id={id}
      ref={ref}
      {...rest}
      rows={1}
    />
  );
}

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
  onChnage: PropTypes.func,
  w: PropTypes.string,
  h: PropTypes.string,
  ph: PropTypes.string,
  id: PropTypes.string.isRequired,
};
