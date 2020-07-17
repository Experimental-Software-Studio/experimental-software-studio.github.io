import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

// import { pageEnum } from "../../constants";
import Logo from "../../images/logo-white-bg.svg";
import styles from "./styles.module.css";

const Header = (/*{ page }*/) => {
  // TODO: Add these back in when you make the other pages
  // const homePageClass =
  //   page === pageEnum.HOME
  //     ? [styles.link, styles.active].join(" ")
  //     : styles.link;
  // const portfolioPageClass =
  //   page === pageEnum.PORTFOLIO
  //     ? [styles.link, styles.active].join(" ")
  //     : styles.link;
  // const contactPageClass =
  //   page === pageEnum.CONTACT
  //     ? [styles.link, styles.active].join(" ")
  //     : styles.link;

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>

      {/* TODO: Add these back in when you make the other pages */}
      {/* <div className={styles.links}>
        <Link to="/" className={homePageClass}>
          HOME
        </Link>
        <Link to="/portfolio" className={portfolioPageClass}>
          PORTFOLIO
        </Link>
        <Link to="/contact" className={contactPageClass}>
          CONTACT
        </Link>
      </div> */}
    </div>
  );
};

Header.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Header;
