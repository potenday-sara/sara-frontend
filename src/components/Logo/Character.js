import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";
import { css, styled } from "styled-components";

const getCharacterDivStylesByType = (type) => {
  if (type === 'sara') return css`

    padding: 30px 28px 54px;
    background-color: rgba(0, 123, 237, 0.1);
  `
  else return css`
    padding: 48px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), #EF2B00;;
  
  `
}

const StyledCharaterDiv = styled.div`
    border-radius: 50%;
    width: 216px;
    height: 216px;
  ${({ $type }) => getCharacterDivStylesByType($type)}
`

export default function Character({ $type }) {
  return <StyledCharaterDiv $type={$type}>{$type === "sara" ? <Sara /> : <Mara />}</StyledCharaterDiv>;
}

Character.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
