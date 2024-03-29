import { css, styled } from "styled-components";
import { getTextColor } from "../../../Styles";
import { ReactComponent as SaraText } from "../../../images/logos/saracirclewhite.svg";
import { ReactComponent as MaraText } from "../../../images/logos/maracirclewhite.svg";
// import { ReactComponent as SaraText } from "../../../images/logos/saralogoblue.svg";
// import { ReactComponent as MaraText } from "../../../images/logos/maralogored.svg";

const getBubbleType = ({ $type }) => {
  return $type === "sara"
    ? css`
        right: 50%;
        .speech-bubble:after {
          right: 0%;
          border-right: 0px;
        }
      `
    : css`
         width: 243px;
         height:72px;    
         .speech-bubble:after {
         left: 0%;
         border-left: 0;
        }
      `;
};

const StyledTextbubble = styled.div`
  position: absolute;
  left: 60%;
  top: 3px;

  ${(props) => getTextColor(props)}
  .speech-bubble {
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
    padding: 10px 10px;
    position: relative;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
    background: white;
    border-radius: 12px;
    svg {
      width: 92.797px;
      height: 40px;
      transform: (-1%,-3%);
    }
    h1 {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .speech-bubble:after {
    content: "";
    z-index: 2;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    margin-bottom: -20px;
  }
  ${(props) => getBubbleType(props)}
`;

export default function Textbubble({ $type }) {
  return (
    <StyledTextbubble $type={$type}>
      <div className="speech-bubble">
        {$type === "sara" ? (
          <>
            <h1>살까말까 할땐</h1>
          </>
        ) : (
          <>
            <h1>사지</h1>
          </>
        )}
      </div>
    </StyledTextbubble>
  );
}
