import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Project = ({ logo, text }) => (
  <div className={styles.project}>
    <img src={logo} className={styles.logo} alt="Client Logo" />
    <h2>{text}</h2>
  </div>
);

Project.propTypes = {
  logo: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Project;
