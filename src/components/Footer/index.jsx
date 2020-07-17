import React from "react";
import { Link } from "gatsby";

import LinkedinLogo from "../../images/linkedin-logo.png";
import GithubLogo from "../../images/github-logo.png";
import Logo from "../../images/logo.svg";
import styles from "./styles.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.socials}>
        <a
          href="https://github.com/Experimental-Software-Studio"
          target="_blank"
        >
          <img src={GithubLogo} className={styles.social} alt="GitHub Logo" />
        </a>
        <a
          href="https://www.linkedin.com/company/experimental-software"
          target="_blank"
        >
          <img
            src={LinkedinLogo}
            className={styles.social}
            alt="LinkedIn Logo"
          />
        </a>
      </div>
      <div className={styles.logoContainer}>
        <img src={Logo} className={styles.logo} />
        <p className={styles.copyright}>© 2020 Experimental Software LLC</p>
      </div>
      <div className={styles.links}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <a className={styles.link}>Careers</a>
      </div>

      <div className={styles.mobileInfo}>
        <div className={styles.mobileSocials}>
          <img src={GithubLogo} className={styles.social} alt="GitHub Logo" />
          <img
            src={LinkedinLogo}
            className={styles.social}
            alt="LinkedIn Logo"
          />
        </div>
        <div className={styles.mobileLinks}>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <a className={styles.link}>Careers</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
