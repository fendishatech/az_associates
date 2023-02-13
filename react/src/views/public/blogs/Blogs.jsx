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
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {!loading &&
            blogs.length > 0 &&
            blogs.map((blog, index) => (
              <Link
                className="col-md-6 text-dark mb-4"
                to={`/blogs/${blog.id}`}
                key={index}
              >
                <div className="col">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                      className="card-img-top"
                      alt="Hollywood Sign on The Hill"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.content}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
