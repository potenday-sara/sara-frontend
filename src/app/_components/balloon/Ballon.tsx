import React from 'react';

interface Props {
  children: React.ReactNode;
  position: 'bubble-left-top' | 'bubble-right-top' | 'bubble-left-bottom' | 'bubble-right-bottom';
  classNames: string;
}

function Balloon({ children, position, classNames }: Props) {
  return <div className={`${classNames} ${position}`}>{children}</div>;
}

export default Balloon;
