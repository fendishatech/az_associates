import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services text-dark">
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h2>Services</h2>
          <p>
            At Zerihun Associates, we offer a comprehensive range of research
            and consultancy services that are designed to meet the diverse needs
            of our clients. Our goal is to provide our clients with the insights
            and support they need to make informed decisions and achieve their
            goals.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4>
                <a href="">Data Collection</a>
              </h4>
              <p>
                Our team of experienced research professionals has extensive
                experience in conducting various types of data collection,
                including surveys, focus groups, and in-depth interviews. We use
                cutting-edge technologies and innovative methodologies to ensure
                that our data collection is accurate, reliable, and
                representative. Our data collection processes are designed to be
                flexible and responsive to the changing needs of our clients,
                and we are committed to delivering results that meet their
                specific requirements.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4>
                <a href="">Data Analysis</a>
              </h4>
              <p>
                Our team of skilled data analysts has the expertise to turn raw
                data into meaningful insights. We use a variety of statistical
                techniques to analyze data, including regression analysis,
                factor analysis, and cluster analysis, among others. We work
                closely with our clients to ensure that our data analysis is
                aligned with their specific goals and objectives, and we deliver
                actionable recommendations that are tailored to their needs.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4>
                <a href="">Research</a>
              </h4>
              <p>
                Our research services are designed to provide our clients with
                the insights they need to make informed decisions. We have
                extensive experience in various sectors, including [list some
                relevant sectors], and we are constantly expanding our expertise
                to meet the evolving needs of our clients. Whether you're
                looking to understand consumer attitudes and behaviors, evaluate
                market trends and opportunities, or assess the impact of
                business and policy decisions, Zerihun Associates has the
                expertise and resources to help.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to={"/services"} className="mt-2 px-4 services-link">
            Check Out Our Services ...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
