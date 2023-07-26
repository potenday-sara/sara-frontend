import { css, styled } from "styled-components";

import PropTypes from "prop-types";
import { ReactComponent as Sara } from "../../images/logos/saralogo1.svg";
import { ReactComponent as Mara } from "../../images/logos/maralogo1.svg";
import { getBackgroundColor, getBasicButton, getTextColor } from "../../Styles";

const StyledChoiceButton = styled.button`
  ${(props) => getStyledButtonSize(props)}
  ${(props) => getBackgroundColor(props)}
  ${(props) => getTextColor({ $type: "white" })}
  ${(props) => getBasicButton()}
  white-space: nowrap;
  padding: 10px;
  aspect-ratio: 1 / 1;
  font-weight: 600;
  width:340px;
  height:336px;
  top: 30px;
  left: 20px;
  position: relative;
  box-shadow: 0px 5px 0px 0px
    ${({ $type }) => ($type === "mara" ? "#BD2200" : "#0158a8")};
  transition: all 0.2s;
  margin: 0px;
  &:hover {
    box-shadow: 0px 0px 0px 0px
      ${({ $type }) => ($type === "mara" ? "#BD2200" : "#0158a8")};
    margin-top: 7px;
    margin-bottom: 5px;
  }

  gap: 5px;
`;

const getStyledButtonSize = ({ size }) => {
  switch (size) {
    case "small":
      return css`
        width: 150px;
        font-size: 12px;
      `;

    case "medium":
      return css`
        width: 200px;
        font-size: 16px;
      `;
    case "big":
      return css`
        width: 250px;
        font-size: 20px;
      `;
    default:
      return css`
        width: 100%;
        font-size: 20px;
      `;
  }
};


/**
 * 
 * $type : sara, mara 
 * size : small, medium, big (default : 100%) 
 * onClick : click event
 * @returns 
 */

export const ChoiceButton = ({ $type, ...rest }) => {
  return (
    <StyledChoiceButton $type={$type} {...rest}>
      {$type === "sara" ? <Sara /> : <Mara stroke="white" />}
      에게 물어보기
    </StyledChoiceButton>
  );
};


ChoiceButton.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "big"]).isRequired,
  onClick: PropTypes.func,
};

ChoiceButton.defaultProps = {
  onClick: undefined,
};
