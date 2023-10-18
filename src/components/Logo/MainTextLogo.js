import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Sara } from "../../images/logos/saratextlogo.svg";
import { ReactComponent as Mara } from "../../images/logos/maratextlogo.svg";
import { css, styled } from "styled-components";

const getCSSByStage = (stage) => {
  if (stage === "answer") {
    return css`
      width: 148px;
      height: 80px;
    `;
  } else {
    return css`
      width: 162.4px;
      height: 88px;
    `;
  }
};

const StyledMainTextLogo = styled.div`
  ${({ stage }) => getCSSByStage(stage)}
  margin: auto;
  ${({ $getMainTextLogoStyles }) => $getMainTextLogoStyles}
  .mara {
    margin: 1px 0px;
  }
`;

export default function MainTextLogo({ $type, ...rest }) {
  console.log(rest.stage);
  return (
    <StyledMainTextLogo {...rest} className="textLogo">
      {$type === "sara" ? <Sara className="sara" /> : <Mara className="mara" />}
    </StyledMainTextLogo>
  );
}

MainTextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
  $stage: PropTypes.oneOf(["answer", "form"]),
  $width: PropTypes.string,
  $height: PropTypes.string,
};
