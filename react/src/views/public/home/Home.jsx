import React from "react";
import { Helmet } from "react-helmet-async";
import Clients from "./Clients";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Zerihun Associates</title>
      </Helmet>
      <Hero />
      <AboutUs />
      <Services />
      <Experiences />
      <Team />
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
