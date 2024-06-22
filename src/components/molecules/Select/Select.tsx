import React from 'react';

interface Item {
  id: number;
  name: string;
  [key: string]: any; // 추가적인 속성을 허용
}

interface Props {
  options: Item[];
}

function Select({ options }: Props) {
  return <div />;
}

function ListItem({ item }: { item: Item }) {
  return <div />;
}

function Option({ item }: { item: Item }) {
  return <div />;
}

export default React.memo(Select);
