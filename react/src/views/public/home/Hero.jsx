import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1>Welcome to Zerihun Associates</h1>
        <h2>Advancing evidence-Based policy making in Africa.</h2>
        <a href="#about" className="btn-get-started scrollto">
          Learn More About US
        </a>
      </div>
    </section>
  );
};

export default Hero;
