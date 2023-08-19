import React from "react";
import { BasicText } from "../../components/Text/Text";
import TitleLines from './components/TitleLines'

export default function Temp() {
  return (<div style={{ width: '500px', height: '500px' }}>
    <TitleLines $type={'sara'} />
    <TitleLines $type={'mara'} />
  </div>)
} 