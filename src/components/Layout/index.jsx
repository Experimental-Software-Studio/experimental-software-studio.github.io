import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.css";

const Layout = ({ page, children }) => {
  return (
    <>
      <Header page={page} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  page: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
