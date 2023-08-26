import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Sara } from "../../images/logos/miainlogo.svg";
import { ReactComponent as Mara } from "../../images/logos/maratextlogo.svg";

export default function TextLogo({ $type }) {
  return <div className="textLogo">{$type === "sara" ? <Sara /> : <Mara />}</div>;
}

TextLogo.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
