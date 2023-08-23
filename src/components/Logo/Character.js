import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";
import { styled } from "styled-components";

const StyledCharaterDiv = styled.div`
  width: 216px;
  height: 216px;
  padding: 30px 28px 54px;
  /* border-radius : 50%; */
  /* fill: linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), #007BED; */
  border-radius: 50%;
  background-color: rgba(0, 123, 237, 0.1);
`

export default function Character({ $type }) {
  return <StyledCharaterDiv>{$type === "sara" ? <Sara /> : <Mara />}</StyledCharaterDiv>;
}

Character.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
