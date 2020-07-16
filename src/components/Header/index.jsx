import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { pageEnum } from "../../constants";
import LogoSquareCircle from "../../images/logo-square-circle.svg";
import styles from "./styles.module.css";

const Header = ({ page }) => {
  const homePageClass = page === pageEnum.HOME ? styles.active : "";
  const portfolioPageClass = page === pageEnum.PORTFOLIO ? styles.active : "";
  const contactPageClass = page === pageEnum.CONTACT ? styles.active : "";

  return (
    <div className={styles.header}>
      <img className={styles.flexChild} src={LogoSquareCircle} alt="logo" />

      <div className={styles.flexChild}>
        <Link to="/" className={[styles.link, homePageClass].join(" ")}>
          HOME
        </Link>
        <Link
          to="/portfolio"
          className={[styles.link, portfolioPageClass].join(" ")}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className={[styles.link, contactPageClass].join(" ")}
        >
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
