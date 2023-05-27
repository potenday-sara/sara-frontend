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
import { ReactComponent as SaraText } from "../../images/logos/textbox.svg";
import { ReactComponent as MaraText } from "../../images/logos/textboxmara.svg";
import { ReactComponent as MainLogo } from "../../images/logos/miainlogo.svg";

const getGridCSS = ({ type }) => {
  if (type === "sara") {
    return css`
      position: relative;
      grid-template-columns: minmax(auto, 800px) minmax(100px, 300px);
      .mainlogo {
        position: absolute;
        width: 150px;
        top: -25px;
        left: 100%;
        transform: translate(calc(-50% + 20px), -50%);
        cursor: pointer;
      }
      .realtime {
        text-align: right;
        .texts button {
          margin-left: auto;
        }
      }
      .logobox {
        align-items: end;
        justify-content: end;
        .logo {
          position: relative;
          left: 25px;
        }

        .text-box {
          right: 50%;
          transform: translate(calc(0% + 80px), calc(0%));
        }
      }

      .choiceButton {
        justify-content: end;
      }
    `;
  } else {
    return css`
      grid-template-columns: minmax(100px, 300px) minmax(auto, 800px);
      .realtime {
        text-align: left;
        grid-area: 1 / 2 / 2 / 3;
        .texts button {
          margin-right: auto;
        }
      }
      .logobox {
        align-items: end;
        justify-content: start;

        .text-box {
          left: 50%;
          transform: translate(calc(0% - 80px), calc(0%));
        }
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
  grid-template-rows: minmax(auto, 250px) minmax(200px, 300px);
  margin-bottom: 80px;

  width: 100%;
  height: 70%;
  min-height: 450px;
  max-width: 1000px;

  .realtime {
    height: 80%;
    margin-top: auto;
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
    /* overflow: hidden; */
    position: relative;
    display: flex;

    .logo {
      width: 80%;
      height: 80%;
    }
    .text-box {
      position: absolute;
      top: -30%;
    }
  }
  .article {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    width: 100%;
  }
  .choiceButton {
    display: flex;
    padding-bottom: 0px;
  }
`;

export default function GridLayout({ $type, texts }) {
  const navigate = useNavigate();
  return (
    <StyledGridayout type={$type}>
      {$type === "sara" ? (
        <MainLogo onClick={() => navigate("/")} className="mainlogo" />
      ) : null}
      {/* <MainLogo className="mainlogo" /> */}
      <div className="realtime">
        <MainText label={"실시간 사라"} type="h2" color="black" />
        <div className="texts">
          {texts.map((i) => (
            <TextButton label={i} size="small" />
          ))}
        </div>
      </div>
      <div className="logobox">
        {$type === "sara" ? (
          <>
            <SaraText className="text-box" />
            {/* <img src={SaraText} alt="" /> */}
            {/* <MainLogo className="mainlogo" /> */}
            <Sara className="logo"></Sara>
          </>
        ) : (
          <>
            <MaraText className="text-box" />
            <Mara className="logo" />
          </>
        )}
      </div>

      <article className="article">
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
