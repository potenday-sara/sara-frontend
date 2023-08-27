import React from "react";
import PropTypes from "prop-types";


import { ReactComponent as Sara } from "../../images/logos/SaraText.svg"
import { ReactComponent as Mara } from "../../images/logos/MaraText.svg"
import { css, styled } from "styled-components";
import { getColorByType, getColorCode } from "../../Styles";

const getTextLogoCss = ($type) => {
  if ($type === 'sara') {
    return css`
      width: 63px;
      height: 20px;
    `
  }

  else {
    return css`
      width: 81px;
      height: 20px;
    `
  }
}

const StyledTextLogo = styled.div`
  display: flex;
  ${({ $type }) => getTextLogoCss($type)}
  ${({ $getTextLogoStyles }) => $getTextLogoStyles} 
`


export default function TextLogo({ $type, $fill, ...rest }) {
  return <StyledTextLogo {...rest} $type={$type} className="textLogo">{$type === "sara" ? <Sara fill={getColorCode($fill)} /> : <Mara fill={getColorCode($fill)} />}</StyledTextLogo>;
}

TextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
