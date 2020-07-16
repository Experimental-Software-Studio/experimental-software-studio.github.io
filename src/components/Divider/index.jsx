import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Divider = ({ alt }) => {
  const svgClass = alt
    ? [styles.divider, styles.alt].join(" ")
    : styles.divider;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={svgClass}
    >
      <polygon points="0,100 100,0 100,100" />
    </svg>
  );
};

Divider.defaultProps = {
  alt: false,
};

Divider.propTypes = {
  alt: PropTypes.bool.isRequired,
};

export default Divider;
