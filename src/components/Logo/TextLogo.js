import React from "react";
import PropTypes from "prop-types";


import { ReactComponent as Sara } from "../../images/logos/SaraText.svg"
import { ReactComponent as Mara } from "../../images/logos/MaraText.svg"
import { styled } from "styled-components";
import { getColorByType, getColorCode } from "../../Styles";



const StyledTextLogo = styled.div`
`


export default function TextLogo({ $type }) {
  return <StyledTextLogo $type={$type} className="textLogo">{$type === "sara" ? <Sara fill={getColorCode(getColorByType($type))} /> : <Mara fill={getColorCode(getColorByType($type))} />}</StyledTextLogo>;
}

TextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
