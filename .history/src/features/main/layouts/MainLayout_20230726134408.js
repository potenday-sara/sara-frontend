import React from "react";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import Articles from "../components/Articles";
import RealtimeKeywords from "../components/RealtimeKeywords";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getGridStyles } from "../utils/getStyles";
import { getRangking } from "../apis/getRanking";
import CharacterLogo from "../../../components/Logo/CharacterLogo";
import { ChoiceButton } from "../../../components/Button/ChoiceButton";

const StyledGridayout = styled.main`
  ${(props) => getGridStyles(props)}
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: 1fr 1.5fr;
  width: 100%;
  z-index: 1;

  .realtime {
    height: 60%;
    margin-top: auto;
    ${({ $type }) => ($type === "mara" ? "left:20px" : "left:55%")};
    position: relative;
    display: flex;

    .texts {
      margin-top: 12px;
      
    }
    .texts button {
      // margin-bottom: 8px;
      display: flex;
      padding: 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  }
  .article {
    position: relative;
    overflow: auto;
  }
`;




export default function MainLayout({ $type }) {
  const [trendData, setTrendData] = useState([]);
  const { isLoading: trendLoading, data: trendApiData } = useQuery(
    [$type, "ranking"],
    () => getRangking($type)
  );
  useEffect(() => {
    setTrendData(trendApiData?.data?.data);
  }, [trendApiData]);
  const navigate = useNavigate();

  return (
    <StyledGridayout type={$type}>
      <RealtimeKeywords
        $type={$type}
        isLoading={trendLoading}
        data={trendData}
      />
      
      <CharacterLogo $type={$type} />
      
      <div className="choiceButton">
        <ChoiceButton
          size={"medium"}
          $type={$type}
          onClick={() =>
            $type === "sara"
              ? navigate("/question/sara")
              : navigate("/question/mara")
          }
        />
      </div>
    </StyledGridayout>
  );
}

MainLayout.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
