import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Art404 from "../images/404-art.svg";
import styles from "./404.module.css";

const NotFoundPage = () => (
  <div>
    <SEO title="404 Not found" />
    <Layout>
      <div className={styles.container}>
        <img src={Art404} className={styles.art} alt="404 Not Found" />
        <h2>404 This page doesn't exist.</h2>
      </div>
    </Layout>
  </div>
);

export default NotFoundPage;
