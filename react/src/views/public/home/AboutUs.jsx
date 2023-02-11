import { Link } from "react-router-dom";
import { About } from "../../../assets/Images";

const AboutUs = () => {
  return (
    <section id="about" className="about text-dark">
      <div className="container">
        <div className="section-title">
          <span>About Us</span>
          <h2>About Us</h2>
          <p>
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src={About} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
            <h3>what we do</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
            </ul>
            <h3 className="mt-2">Partners</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/about" className="btn btn-danger p-2 px-5">
              Learn More ...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
