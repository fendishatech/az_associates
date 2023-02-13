import { useState, useEffect } from "react";
import axiosClient from "../../../api/axios-client";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Pt2 } from "../../../assets/Images";
import Breadcrumb from "../../../components/Breadcrumb";

const Blogs = () => {
  const [blogs, setBlogs] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = () => {
      setLoading(true);
      axiosClient
        .get("/public/blogs")
        .then(({ data }) => {
          setLoading(false);
          setBlogs(data.data);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };

    getBlogs();
  }, []);

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
      {loading && <p>Loading...</p>}
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-8">
            <div className="row">
              {!loading &&
                blogs.length > 0 &&
                blogs.map((blog, index) => (
                  <Link
                    className="col-md-6 text-dark mb-4 blog"
                    to={`/blogs/${index}`}
                    key={index}
                  >
                    <div key={index}>
                      <img className="img-fluid img-rounded" src={Pt2} alt="" />
                      <div>
                        <h4 className="my-2">{blog.title}</h4>
                        <p>{blog.content}</p>
                      </div>
                    </div>
                  </Link>
                ))}
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
