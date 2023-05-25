import React from "react";
import { css, styled } from "styled-components";
import { ChoiceButton } from "../../items/Button/MainButton";
import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";

const getGridCSS = (type) => {
  return css`
    .realtime {
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
};

const StyledGridayout = styled.main`
  ${() => getGridCSS()}
  display: grid;
  grid-gap: 15px;
  grid-template-rows: 1fr 1.2fr;
  grid-template-columns: 1.5fr 1fr;
  width: 100%;
  aspect-ratio: 16 / 13;

  .realtime {
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
    display: flex;
    padding-bottom: 50px;
  }
`;

export default function GridLayout({ type }) {
  return (
    <StyledGridayout>
      <div className="realtime"></div>
      <div className="logobox">{type === "sara" ? <Sara /> : <Mara />}</div>
      <article className="article"></article>
      <div className="choiceButton">
        {type === "sara" ? (
          <ChoiceButton type={type} size="large" $backgroundColor={"blue"} />
        ) : (
          <ChoiceButton type={type} size="large" $backgroundColor={"red"} />
        )}
      </div>
    </StyledGridayout>
  );
}
