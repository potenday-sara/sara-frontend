import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Sara } from "../../images/logos/saratextlogo.svg";
import { ReactComponent as Mara } from "../../images/logos/maratextlogo.svg";
import { styled } from "styled-components";



const StyledMainTextLogo = styled.div`
  width: 162.4px;
  height: 88px;
  margin: auto;
  ${({ $getMainTextLogoStyles }) => $getMainTextLogoStyles}
`

export default function MainTextLogo({ $type, ...rest }) {
  return <StyledMainTextLogo {...rest} className="textLogo">{$type === 'sara' ? <Sara /> : <Mara />}</StyledMainTextLogo>;
}

MainTextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
  $width: PropTypes.string,
  $height: PropTypes.string,
};
