import { ReactNode } from 'react';

interface Props {
  className?: string;
  onClick: () => void;
  label: ReactNode;
}

export default function Button({ label, ...rest }: Props) {
  return <button {...rest}>{label}</button>;
}
