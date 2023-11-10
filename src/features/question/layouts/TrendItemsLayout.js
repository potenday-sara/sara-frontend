import React from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { BasicText } from "../../../components/Text/Text";
import TextLogo from "../../../components/Logo/TextLogo";
import TrendItem from "../components/TrendItem";

const StyledTrendItemLayout = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  margin-right: auto;
  border-radius: 24px;
  max-width: 394px;
  height: 715px;
  padding: 20px 16px;
  border: 1px solid #ddd;

  .title {
    display: flex;
    gap: 5px;
  }
  .trend-items {
    margin-top: 23px;
    display: grid;
    gap: 12px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .bottom {
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgba(0, 123, 237, 0.05);
    left: 0px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    bottom: 0px;
    p {
      font-size: 10px !important;
    }
  }
`;

export default function TrendItemLayout({ $type }) {
  return (
    <StyledTrendItemLayout $type={$type}>
      <div className="title">
        <TextLogo $type={$type} $fill={$type === "sara" ? "blue" : "red"} />
        <BasicText label={"닭가슴살"} />
        <BasicText label={"요즘 많이 팔리는"} />
      </div>
      <div className="trend-items">
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </div>
      <div className="bottom">
        <BasicText
          $color={"gray"}
          label={
            "*위 컨텐츠는 쿠팡 파트너스 활동의 일원으로 금전적 대가를 취할 수 있습니다"
          }
        />
      </div>
    </StyledTrendItemLayout>
  );
}

TrendItemLayout.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
