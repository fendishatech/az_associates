import { Client1 } from "../../../assets/Images";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="row d-flex align-items-center">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6">
              <img src={Client1} className="img-fluid" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
