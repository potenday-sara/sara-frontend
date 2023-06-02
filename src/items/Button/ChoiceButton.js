import { styled } from "styled-components";

import PropTypes from "prop-types";
import { ReactComponent as Sara } from "../../images/logos/saralogo1.svg";
import { ReactComponent as Mara } from "../../images/logos/maralogo1.svg";
import { getBackgroundColor, getBasicButton, getTextColor } from "../../Styles";

const StyledChoiceButton = styled.button`
  ${(props) => getBackgroundColor(props)}
  ${(props) => getTextColor({ $type: "white" })}
  ${(props) => getBasicButton()}

  padding: 10px;
  width: 100%;
  aspect-ratio: 1 / 1;
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

export const ChoiceButton = ({ $type, ...rest }) => {
  return (
    <StyledChoiceButton $type={$type}>
      {$type === "sara" ? <Sara /> : <Mara stroke="white" />}
      <h2>에게 물어봐</h2>
    </StyledChoiceButton>
  );
};

ChoiceButton.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
  onClick: PropTypes.func,
};

ChoiceButton.defaultProps = {
  onClick: undefined,
};
