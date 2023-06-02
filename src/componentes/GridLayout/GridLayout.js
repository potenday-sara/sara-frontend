import React from "react";
import { css, styled } from "styled-components";

import { ChoiceButton } from "../../items/Button/ChoiceButton";

import { useNavigate } from "react-router-dom";

import { useQuery } from "react-query";
import { getRangking } from "../../apis";
import CharacterLogo from "../../items/Logo/CharacterLogo";
import MainArticles from "../MainArticles/MainArticles";

const getGridCSS = ({ type }) => {
  if (type === "sara") {
    return css`
      position: relative;
      grid-template-columns: 2fr 1.2fr;
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
        justify-content: flex-end;
        .logo {
          position: relative;
          left: 25px;
        }

        .text-box {
          right: 50%;
          transform: translate(calc(0% + 80px), calc(0%));
        }
      }
    `;
  } else {
    return css`
      grid-template-columns: 1.2fr 2fr;
      .realtime {
        text-align: left;
        grid-area: 1 / 2 / 2 / 3;
        .texts button {
          margin-right: auto;
        }
      }
      .logobox {
        align-items: end;
        justify-content: flex-start;

        .text-box {
          left: 50%;
          transform: translate(calc(0% - 80px), calc(0%));
        }
      }

      .choiceButton {
        grid-area: 2 / 1 / 3 / 2;
      }
    `;
  }
};

const StyledGridayout = styled.main`
  ${(props) => getGridCSS(props)}
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  grid-template-rows: 1fr 1.5fr;
  width: 100%;
  z-index: 1;

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
  .article {
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;
  }
`;

export default function GridLayout({ $type, texts }) {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery([$type, "ranking"], () =>
    getRangking($type)
  );

  return (
    <StyledGridayout type={$type}>
      <div className="realtime"></div>

      <CharacterLogo $type={$type} />
      <div className="article">
        <MainArticles $type={$type} />
      </div>
      <div className="choiceButton">
        <ChoiceButton $type={$type} />
      </div>
    </StyledGridayout>
  );
}

GridLayout.defaultProps = {
  texts: [],
};

// {$type === "sara" ? (
//   <MainLogo onClick={() => navigate("/")} className="mainlogo" />
// ) : null}
// {/* <MainLogo className="mainlogo" /> */}
// <div className="realtime">
//   <MainText
//     label={$type === "sara" ? "실시간 사라" : "실시간 마라"}
//     type="h2"
//     color="black"
//   />
//   {isLoading === false ? (
//     <div className="texts">
//       {data.data.data.slice(0, 3).map((i, idx) => (
//         <TextButton key={idx} label={i.object} size="small" />
//       ))}
//     </div>
//   ) : null}
// </div>
// <div className="logobox">
//   {$type === "sara" ? (
//     <>
//       <SaraText className="text-box" />
//       {/* <img src={SaraText} alt="" /> */}
//       {/* <MainLogo className="mainlogo" /> */}
//       <Sara className="logo"></Sara>
//     </>
//   ) : (
//     <>
//       <MaraText className="text-box" />
//       <Mara className="logo" />
//     </>
//   )}
// </div>

// <article className="article">
//   <ArticleButton $type={$type}></ArticleButton>
//   <ArticleButton $type={$type}></ArticleButton>
// </article>
// <div className="choiceButton">
//   {$type === "sara" ? (
//     <ChoiceButton
//       type={$type}
//       size="large"
//       $backgroundColor={"blue"}
//       onClick={() => navigate("/sara")}
//     />
//   ) : (
//     <ChoiceButton
//       type={$type}
//       size="large"
//       $backgroundColor={"red"}
//       onClick={() => navigate("/mara")}
//     />
//   )}
// </div>
