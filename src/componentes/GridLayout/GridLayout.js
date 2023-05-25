import React from "react";
import { css, styled } from "styled-components";
import {
  BasicButton,
  ChoiceButton,
  TextButton,
} from "../../items/Button/MainButton";
import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";
import { MainText } from "../../items/Text/Text";

const getGridCSS = ({ type }) => {
  if (type === "sara") {
    return css`
      .realtime {
        text-align: right;
        .texts button {
          margin-left: auto;
        }
      }
      .logobox {
        display: flex;
        align-items: end;
        justify-content: end;
        width: 100%;
        height: 100%;
      }
      .article {
      }
      .choiceButton {
        justify-content: end;
      }
    `;
  }
};

const StyledGridayout = styled.main`
  ${(props) => getGridCSS(props)}
  display: grid;
  grid-gap: 15px;
  grid-template-rows: minmax(auto, 300px) minmax(250px, auto);
  grid-template-columns: 1.2fr minmax(200px, 300px);
  width: 100%;
  aspect-ratio: 16 / 9;

  .realtime {
    .texts {
      margin-top: 12px;
    }
    .texts button {
      margin-bottom: 8px;
    }
  }
  .logobox {
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
    height: 100%;

    svg {
      max-width: 300px;
      max-height: 300px;
      height: 100%;
      width: 80%;
    }
  }
  .article {
  }
  .choiceButton {
    display: flex;
    padding-bottom: 50px;
  }
`;

export default function GridLayout({ $type, texts }) {
  return (
    <StyledGridayout type={$type}>
      <div className="realtime">
        <MainText label={"실시간 사라"} type="h2" color="black" />
        <div className="texts">
          {texts.map((i) => (
            <TextButton label={i} size="small" />
          ))}
        </div>
      </div>
      <div className="logobox">{$type === "sara" ? <Sara /> : <Mara />}</div>
      <article className="article"></article>
      <div className="choiceButton">
        {$type === "sara" ? (
          <ChoiceButton type={$type} size="large" $backgroundColor={"blue"} />
        ) : (
          <ChoiceButton type={$type} size="large" $backgroundColor={"red"} />
        )}
      </div>
    </StyledGridayout>
  );
}

GridLayout.defaultProps = {
  texts: [],
};
