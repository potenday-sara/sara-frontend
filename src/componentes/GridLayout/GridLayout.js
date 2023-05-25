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
import { useNavigate } from "react-router-dom";
import { ArticleButton } from "../../items/Button/ArticleButton";

const getGridCSS = ({ type }) => {
  if (type === "sara") {
    return css`
      grid-template-rows: minmax(auto, 300px) minmax(250px, auto);
      grid-template-columns: minmax(auto, 800px) minmax(180px, 300px);
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

      .choiceButton {
        justify-content: end;
      }
    `;
  } else {
    return css`
      grid-template-rows: minmax(auto, 300px) minmax(250px, auto);
      grid-template-columns: minmax(180px, 300px) minmax(auto, 800px);
      .realtime {
        text-align: left;
        grid-area: 1 / 2 / 2 / 3;
        .texts button {
          margin-right: auto;
        }
      }
      .logobox {
        display: flex;
        align-items: start;
        justify-content: start;
        width: 100%;
        height: 100%;
      }
      .article {
      }
      .choiceButton {
        grid-area: 2 / 1 / 3 / 2;
        justify-content: start;
      }
    `;
  }
};

const StyledGridayout = styled.main`
  ${(props) => getGridCSS(props)}
  display: grid;
  grid-gap: 15px;

  width: 100%;
  max-width: 1000px;
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    svg {
      max-width: 300px;
      max-height: 300px;
      height: 100%;
      width: 80%;
    }
  }
  .article {
    overflow: hidden;
  }
  .choiceButton {
    display: flex;
    padding-bottom: 50px;
  }
`;

export default function GridLayout({ $type, texts }) {
  const navigate = useNavigate();
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
      <article className="article">
        <ArticleButton></ArticleButton>
        <ArticleButton></ArticleButton>
        <ArticleButton></ArticleButton>
      </article>
      <div className="choiceButton">
        {$type === "sara" ? (
          <ChoiceButton
            type={$type}
            size="large"
            $backgroundColor={"blue"}
            onClick={() => navigate("/sara")}
          />
        ) : (
          <ChoiceButton
            type={$type}
            size="large"
            $backgroundColor={"red"}
            onClick={() => navigate("/mara")}
          />
        )}
      </div>
    </StyledGridayout>
  );
}

GridLayout.defaultProps = {
  texts: [],
};
