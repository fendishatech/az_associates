import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Pt2 } from "../../../assets/Images";
import Breadcrumb from "../../../components/Breadcrumb";

const Blogs = () => {
  return (
    <div className="text-dark">
      <Helmet>
        <title>Zerihun Associates | Blogs</title>
      </Helmet>
      <Breadcrumb innerPage={"Blogs"} />
      <div>
        <div className="section-title mt-4">
          <span>Check Out Our Blogs</span>
          <h2>Check Out Our Blogs</h2>
        </div>
      </div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-8">
            <div className="row">
              {[0, 1, 2, 3, 4, 5].map((index) => {
                return (
                  <Link
                    className="col-md-6 text-dark mb-4 blog"
                    to={`/blogs/${index}`}
                    key={index}
                  >
                    <div key={index}>
                      <img className="img-fluid img-rounded" src={Pt2} alt="" />
                      <div>
                        <h4 className="my-2">blog title longer title</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nesciunt voluptate quo nulla perferendis vel,
                          illum est itaque ab quaerat sequi in fuga quam
                          reiciendis sunt dolores
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <h4>Recent Posts</h4>
            <img className="img-fluid img-recomm" src={Pt2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
