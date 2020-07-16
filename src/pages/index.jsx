import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Divider from "../components/Divider";
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
