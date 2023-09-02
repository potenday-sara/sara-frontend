import React from "react";
import PropTypes from "prop-types";

<<<<<<< HEAD
import { ReactComponent as Sara } from "../../images/logos/saratextlogo.svg";
=======
import { ReactComponent as Sara } from "../../images/logos/miainlogo.svg";
>>>>>>> 90f85befeb75d7d7215ac98e2fbd412fb48e136d
import { ReactComponent as Mara } from "../../images/logos/maratextlogo.svg";
import { styled } from "styled-components";



const StyledMainTextLogo = styled.div`
  width: 147.8px;
  height: 80px;
  margin: auto;
  ${({ $getMainTextLogoStyles }) => $getMainTextLogoStyles}
`

export default function MainTextLogo({ $type, ...rest }) {
  // return <StyledMainTextLogo className="textLogo">{$type === "sara" ? <Sara /> : <Mara />}</StyledMainTextLogo>;
  return <StyledMainTextLogo {...rest} className="textLogo">{$type === 'sara' ? <Sara /> : <Mara />}</StyledMainTextLogo>;
<<<<<<< HEAD
  // return <StyledMainTextLogo {...rest} className="textLogo"><Sara /></StyledMainTextLogo>;
=======
>>>>>>> 90f85befeb75d7d7215ac98e2fbd412fb48e136d
}

MainTextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
  $width: PropTypes.string,
  $height: PropTypes.string,
};
