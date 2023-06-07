import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";
import { ReactComponent as Main } from "../../images/logos/miainlogo.svg";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import Textbubble from "../Textbubble/Textbubble";
import { useNavigate } from "react-router-dom";

const StyledLogoBox = styled.div`
  position: relative;
  display: flex;
  svg {
    width: 60%;
    height: 60%;
  }
  .mainlogo {
    position: absolute;
    width: 150px;
    top: -10px;
    left: 100%;
    transform: translate(calc(-50% + 20px), -50%);
    cursor: pointer;
  }
`;

function getLogo($type) {
  return $type === "sara" ? (
    <>
      <Main />
      <Sara />
    </>
  ) : (
    <Mara />
  );
}

export default function CharacterLogo({ $type }) {
  return (
    <StyledLogoBox className="logobox">
      <Textbubble $type={$type} />
      {getLogo($type)}
    </StyledLogoBox>
  );
}

CharacterLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
