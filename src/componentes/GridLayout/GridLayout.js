import React from "react";
import { css, styled } from "styled-components";
import { ChoiceButton } from "../../items/Button/ChoiceButton";
import { useQuery } from "react-query";
import { getRangking } from "../../apis";
import CharacterLogo from "../../items/Logo/CharacterLogo";
import MainArticles from "../MainArticles/MainArticles";
import RealtimeTrends from "../RealtimeTrends/RealtimeTrends";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const getGridCSS = ({ type }) => {
  if (type === "sara") {
    return css`
      position: relative;
      grid-template-columns: 2fr minmax(200px, 1fr);

      .realtime {
        text-align: right;
        .texts button {
          margin-left: auto;
        }
      }
      .logobox {
        align-items: end;
        justify-content: flex-end;
      }
    `;
  } else {
    return css`
      grid-template-columns: minmax(200px, 1fr) 2fr;
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
  grid-row-gap: 30px;
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
    overflow: auto;
  }
`;

export default function GridLayout({ $type }) {
  const navigate = useNavigate();
  return (
    <StyledGridayout type={$type}>
      <RealtimeTrends $type={$type} />
      <CharacterLogo $type={$type} />
      <div className="article">
        <MainArticles $type={$type} />
      </div>
      <div className="choiceButton">
        <ChoiceButton
          $type={$type}
          onClick={() =>
            $type === "sara" ? navigate("/sara") : navigate("/mara")
          }
        />
      </div>
    </StyledGridayout>
  );
}

GridLayout.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
