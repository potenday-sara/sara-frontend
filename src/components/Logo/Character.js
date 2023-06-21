import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Sara } from "../../images/logos/sara.svg";
import { ReactComponent as Mara } from "../../images/logos/mara.svg";

export default function Character({ $type }) {
  return <div className="flex">{$type === "sara" ? <Sara /> : <Mara />}</div>;
}

Character.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
