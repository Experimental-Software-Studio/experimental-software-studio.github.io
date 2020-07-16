import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { pageEnum } from "../constants";

const HomePage = () => (
  <div>
    <SEO title="Home" />
    <Layout page={pageEnum.HOME}>
      <Section>
        <h1>asdf Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
      </Section>

      <Section alt>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
        <h1>Experimental Software</h1>
      </Section>

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
