import { useState } from 'react';

/**
 *
 * @param {string} initailValue
 * @returns  value, onChange, setValue
 */
export default function useInput(initailValue) {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    setValue(event?.target?.value);
  };
  return { value, onChange, setValue };
}
