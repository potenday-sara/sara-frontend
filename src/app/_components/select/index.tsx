import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  className?: string;
  value: string;
};

function Select({ onChange, children, value, ...rest }: Props) {
  return (
    <div {...rest}>
      <input type="hidden" onChange={onChange} value={value} />
      {children}
    </div>
  );
}

type ListProps = {
  children: React.ReactNode;
  className: string;
};

function List({ children, className }: ListProps) {
  return <div className={className}>{children}</div>;
}

Select.List = List;

export default Select;
