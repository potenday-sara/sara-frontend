import React from "react";
import { css, styled } from "styled-components";
import TitleLines from "./TitleLines";
import { BasicText } from "../../../components/Text/Text";
import PropTypes from "prop-types";

const getBubbleTypeStyle = ({ $type }) => {
  return $type === "sara"
    ? css`
        .speech-bubble {
          padding: 32px;
          width: 352px;
          border-radius: 48px;
        }
        .speech-bubble:after {

          right: 12%;
          border-left: 0px;
        }
      `
    : css`
        .speech-bubble {
          width: 390px;
          padding : 32px 24px;
        }
         .speech-bubble:after {

         left: 12%;
         border-right: 0;
        }
      `;
};

const StyledTextbubble = styled.div`
  .speech-bubble {
    display: flex;
    align-items: center;
    position: relative;
    height: 207px;
    z-index: 2;
    gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.65);
  }
  
  .speech-bubble:after {
    content: "";
    z-index: 2;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;

    border: 29px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.65);
    border-bottom: 0;
    margin-bottom: -28px;
  }
  ${(props) => getBubbleTypeStyle(props)}
`;


const $textStyles = css`
  opacity: 0.65;
`


const GetTitleContents = ({ $type }) => {
  return (
    <>
      {$type === 'sara' ?
        <>
          <BasicText
            label={'사야할 것과 망설이는 이유를 말해주세요!'}
            $size="md"
            $bold="lg"
            $color="blue"
          />
          <BasicText

            $textStyles={$textStyles}

            $size="xs"
            $bold="sm"
            $color="blue"
            label={'Sara가 긍정적인 정보와 효과를 알려주고,\n구매 결정을 내리는 데 도움을 줄 거예요!'}
          />
        </>
        :
        <>
          <BasicText
            label={'사지 말아야 할 것과 망설이는 이유를 말해주세요.'}
            $size="md"
            $bold="lg"
            $color="red"
          />
          <BasicText

            $textStyles={$textStyles}

            label={"Mara가 객관적인 정보와 기준을 토대로,\n불매 결정을 내리는 데 도움을 줄 거예요!"}
            $size="xs"
            $bold="sm"
            $color="red"
          />
        </>

      }
    </>
  )
}




/**
    * $type을 바탕으로 사라, 마라 말풍선을 리턴합니다.
    * @param {$type} sara, mara로 타입을 결정합니다
    * @returns {React.ReactComponentElement}
    */
export default function TitleBubble({ $type }) {
  return <StyledTextbubble $type={$type}>
    <div className="speech-bubble">
      <TitleLines $type={$type} />
      <GetTitleContents $type={$type} />
    </div>
  </StyledTextbubble>
}

TitleBubble.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
}
