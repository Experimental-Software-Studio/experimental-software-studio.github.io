import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Section = ({ alt, children }) => {
  const sectionClass = alt
    ? [styles.section, styles.alt].join(" ")
    : styles.section;

  return (
    <div className={sectionClass}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Section.defaultProps = {
  alt: false,
};

Section.propTypes = {
  alt: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
