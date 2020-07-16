import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Section = ({ alt, children }) => (
  <div className={[styles.section, alt ? styles.alt : ""].join(" ")}>
    <div className={styles.content}>{children}</div>
  </div>
);

Section.defaultProps = {
  alt: false,
};

Section.propTypes = {
  alt: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
