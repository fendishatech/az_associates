import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../../components/Breadcrumb";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="text-dark">
      <Helmet>
        <title>Zerihun Associates | About Us</title>
      </Helmet>
      <Breadcrumb innerPage={"About Us"} />
      <div className="container">
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Journey</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/1.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/2.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/3.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2015</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/4.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>July 2020</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* <div className="container">
        <p>
          Zerihun Associates is a leading research firm based in Ethiopia,
          founded in 2016. We are dedicated to providing high-quality market
          research and consultancy services to clients across various
          industries. Our team of experienced and knowledgeable professionals
          uses innovative research methodologies and cutting-edge technologies
          to gather, analyze, and interpret data, and deliver actionable
          insights that drive informed decision-making and support our clients'
          growth and success.
        </p>
        <p>
          At Zerihun Associates, we understand the importance of data and
          insights in today's fast-paced business environment. We are committed
          to delivering accurate, reliable, and timely research services that
          meet the evolving needs of our clients. Our team has extensive
          experience in various sectors, including [list some relevant sectors],
          and we are always looking for ways to expand our expertise and better
          serve our clients.
        </p>

        <p>
          Our research services are designed to be customized to the unique
          needs and objectives of each client. Whether you're looking to
          understand consumer attitudes and behaviors, evaluate market trends
          and opportunities, or assess the impact of business and policy
          decisions, Zerihun Associates has the expertise and resources to help.
          We work closely with our clients to ensure that they receive the
          insights and support they need to achieve their goals.
        </p>

        <p>
          At Zerihun Associates, quality, accuracy, and integrity are at the
          core of everything we do. Our commitment to these values is reflected
          in every stage of the research process, from project design to data
          analysis to final presentation. We are proud of the reputation we have
          built for delivering exceptional research services, and we are
          committed to maintaining this standard of excellence.
        </p>

        <p>
          If you're looking for a research firm that is dedicated to delivering
          the insights and support you need to succeed, look no further than
          Zerihun Associates. Contact us today to schedule a consultation and
          learn more about our services. We would be honored to help you achieve
          your goals.
        </p>
      </div> */}
    </div>
  );
};

export default AboutUs;
