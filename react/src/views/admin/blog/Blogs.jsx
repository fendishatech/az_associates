import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";
import defaultImg from "../../../../public/blog-default.jpg";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getBlogs();
  }, []);

  const onDeleteClick = (blog) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }
    axiosClient.delete(`/blogs/${blog.id}`).then(() => {
      setNotification("Blog was successfully deleted");
      getBlogs();
    });
  };

  const getBlogs = () => {
    setLoading(true);
    axiosClient
      .get("/blogs")
      .then(({ data }) => {
        setLoading(false);
        setBlogs(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Blogs</h1>
        <Link className="btn-add" to="/admin/blogs/new">
          Add new
        </Link>
      </div>
      <div className="card animated fadeInDown">
        {loading && (
          <div className="row">
            <p colSpan="5" className="text-center">
              Loading...
            </p>
          </div>
        )}
        {!loading && (
          <div className="row">
            {blogs.map((b) => (
              <div className="row">
                <div className="col-md-4">
                  <img className="img-fluid" src={defaultImg} alt="" />
                </div>
                <div className="col-md-8">
                  <h2>{b.title}</h2>
                  <p>{getText(b.content)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlogs;
