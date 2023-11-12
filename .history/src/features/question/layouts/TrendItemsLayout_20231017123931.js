import React from "react";
import { styled } from 'styled-components';
import PropTypes from "prop-types";

const TrendItemStyle = styled.h2`
  font-size: 16px !important;
  font-weight: 700;
  display: inline-block;
  border-radius: 12px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  padding: 10px;
`;

const TrendStyle = styled.div` 
  width: 100%;
  margin-right: auto;
  max-width: 480px;
  height: 500px;
  padding-top: 40px;

  h2{
    display:block;
    font-size: 18px;
    text-align: left;
  }
  .trend-items{
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    gap:13px;
    margin-top: 10px;
    grid-template-rows: 2.5fr auto;
    grid-template-columns: 1fr;
    
    h2 {
      background : ${(props) => (props.$type === "mara" ? "#f36040" : "#409cf2")}; 
      color: white;
    }
  }
  `
  ;


export default function TrendItem ({ $type }) {
  const items = [
    '에어팟 맥스','삼성 비스포크 냉장고','이케아 비스뵈르','밀키스 제로','서핑 춘식이 인형','레인부츠'
  ];

  return (
    <TrendStyle $type={$type}>
      <h2>요즘 트렌드 아이템</h2>
      <div className ="trend-items" >
        {items.map((itemList)=> (
          <TrendItemStyle >{itemList}</TrendItemStyle>
        ))}
      </div>
    </TrendStyle>
  ); 
}

TrendItem.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};