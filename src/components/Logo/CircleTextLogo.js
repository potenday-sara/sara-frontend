import React from "react";
import PropTypes from "prop-types";


import { ReactComponent as Sara } from "../../images/logos/saracirclewhite.svg"
import { ReactComponent as Mara } from "../../images/logos/maracirclewhite.svg"
import { css, styled } from "styled-components";
import { getColorByType, getColorCode } from "../../Styles";

const getTextLogoCss = ($type) => {
  if ($type === 'sara') {
    return css`

    `
  }

  else {
    return css`

    `
  }
}

const StyledTextCircleLogo = styled.div`
  display: flex;
  width: 131.31px;
  height: 53.9px;
  ${({ $type }) => getTextLogoCss($type)}
  ${({ $getTextLogoStyles }) => $getTextLogoStyles}
`


export default function CircleTextLogo({ $type, $fill, ...rest }) {
  return <StyledTextCircleLogo {...rest} $type={$type}>{$type === "sara" ? <Sara fill={getColorCode($fill)} /> : <Mara fill={getColorCode($fill)} />}</StyledTextCircleLogo>;
}

CircleTextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
