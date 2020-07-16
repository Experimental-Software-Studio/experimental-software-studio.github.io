import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Divider from "../components/Divider";
import Emphasis from "../components/Emphasis";
import { pageEnum } from "../constants";
import FeatureArt from "../images/feature-art.svg";
import styles from "./index.module.css";

const HomePage = () => (
  <div>
    <SEO title="Home" />
    <Layout page={pageEnum.HOME}>
      <Section className={styles.feature}>
        <div className={styles.horiz}>
          <img
            src={FeatureArt}
            className={styles.featureArt}
            alt="Feature Art"
          />
          <div className={styles.textContainer}>
            <h1 className={[styles.featureText, styles.text1].join(" ")}>
              Software
            </h1>
            <h1 className={[styles.featureText, styles.text2].join(" ")}>
              that's truly
            </h1>
            <h1 className={[styles.featureText, styles.text3].join(" ")}>
              yours.
            </h1>
          </div>
        </div>

        <h2 className={styles.featureQuote}>
          We are the team of software engineers and designers that will turn
          your idea into a product.
        </h2>
        <Emphasis />
      </Section>

      <Divider />

      <Section alt>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
      </Section>
      <Divider alt />
      <Section>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
      </Section>
    </Layout>
  </div>
);

export default HomePage;
