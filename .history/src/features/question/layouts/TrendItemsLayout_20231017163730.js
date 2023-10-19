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
  .trend-box{
    display: grid;
    width: 450px;
    word-break: break-all;
    align-items: center;
    background-color: white;
    height: 150px ;
    border-radius: 16px;
    word-break: break-all;
  }

  .trend-items{
    display:flex;
    flex-direction:row;
    align-items: flex-start;
    gap:13px;
    margin-top: 10px;
    grid-template-rows: 2.5fr auto;
    grid-template-columns: 1fr;
    white-space: nowrap;
    
    h2 {
      background : ${(props) => (props.$type === "mara" ? "#ef2b00" : "#007bed")}; 
      color: white;
    }
  }
  `
  ;


export default function TrendItem ({ $type }) {
  const items = [
    '에어팟 맥스','삼성 비스포크 냉장고','공기 청정기','스트링백','뉴발란스 993'
  ];

  return (
    <TrendStyle $type={$type}>
      <div className = "trend-box">
      <h2>인기 아이템</h2>
      <div className ="trend-items" >
        {items.map((itemList)=> (
          <TrendItemStyle >{itemList}</TrendItemStyle>
        ))}
      </div>
      </div>
    </TrendStyle>
  ); 
}

TrendItem.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};