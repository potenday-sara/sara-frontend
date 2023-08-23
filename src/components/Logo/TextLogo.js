import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Sara } from "../../images/logos/miainlogo.svg";
import { ReactComponent as Mara } from "../../images/logos/maratextlogo.svg";
import { styled } from "styled-components";

const StyledTextLogoDiv = styled.div`
  width: 164px;
  height: 88px;

`

export default function TextLogo({ $type }) {
  return <StyledTextLogoDiv >{$type === "sara" ? <Sara /> : <Mara />}</StyledTextLogoDiv>;
}

TextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
