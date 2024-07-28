import React from 'react';

interface Props {
  children: React.ReactNode;
  position: 'bubble-left-top' | 'bubble-right-top' | 'bubble-left-bottom' | 'bubble-right-bottom';
  classNames: string;
}

function Balloon({ children, position, classNames }: Props) {
  const positionClass = `bubble-${position}`;

  return <div className={`${positionClass} ${classNames} ${position}`}>{children}</div>;
}

export default Balloon;
