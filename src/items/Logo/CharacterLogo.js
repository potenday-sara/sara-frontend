import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import Textbubble from "../Textbubble/Textbubble";

const StyledLogoBox = styled.div`
  position: relative;
  display: flex;
  svg {
    width: 60%;
    height: 60%;
  }
`;

export default function CharacterLogo({ $type }) {
  return (
    <StyledLogoBox className="logobox">
      <Textbubble $type={$type} />
      {$type === "sara" ? <Sara /> : <Mara />}
    </StyledLogoBox>
  );
}

CharacterLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
