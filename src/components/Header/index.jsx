import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { pageEnum } from "../../constants";
import LogoSquareCircle from "../../images/logo-square-circle.svg";
import styles from "./styles.module.css";

const Header = ({ page }) => {
  const homePageClass =
    page === pageEnum.HOME
      ? [styles.link, styles.active].join(" ")
      : styles.link;
  const portfolioPageClass =
    page === pageEnum.PORTFOLIO
      ? [styles.link, styles.active].join(" ")
      : styles.link;
  const contactPageClass =
    page === pageEnum.CONTACT
      ? [styles.link, styles.active].join(" ")
      : styles.link;

  return (
    <div className={styles.header}>
      <img className={styles.flexChild} src={LogoSquareCircle} alt="logo" />

      <div className={styles.flexChild}>
        <Link to="/" className={homePageClass}>
          HOME
        </Link>
        <Link to="/portfolio" className={portfolioPageClass}>
          PORTFOLIO
        </Link>
        <Link to="/contact" className={contactPageClass}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Header;
