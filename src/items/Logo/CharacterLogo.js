import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";
import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledLogoBox = styled.div`
  display: flex;
  svg {
    width: 80%;
    height: 80%;
  }
`;

export default function CharacterLogo({ $type }) {
  return (
    <StyledLogoBox className="logobox">
      {$type === "sara" ? <Sara /> : <Mara />}
    </StyledLogoBox>
  );
}

CharacterLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
