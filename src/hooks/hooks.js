import { useState } from "react";

export const useInput = (initailValue) => {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return [value, onChange];
};
