import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios-client.js";
import { useStateContext } from "../../../context/ContextProvider.jsx";

const AdminBlogForm = () => {
  const [authorId, setAuthorId] = useState(1);
  const [authors, setAuthors] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      console.log(authorId);
      formData.append("author_id", authorId);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", file);

      await axiosClient
        .post(`/blogs/`, formData)
        .then(() => {
          setNotification("User was successfully updated");
          navigate("/admin/users");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getAuthors = async () => {
      const res = await axiosClient.get("authors");
      setAuthors(res.data.data);
    };

    getAuthors();
  }, []);

  return (
    <>
      <div className="card animated fadeInDown">
        {loading && <div className="text-center">Loading...</div>}
        {errors && (
          <div className="alert">
            {Object.keys(errors).map((key) => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        )}
        {!loading && (
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <label htmlFor="author_id">Author</label>
            <select
              name="author_id"
              id="author_id"
              className="form-control"
              onChange={(e) => setAuthorId(e.target.value)}
            >
              {authors.length > 0 &&
                authors.map((author, index) => {
                  return (
                    <option key={index} value={author.id}>
                      {" "}
                      {author.title} {author.firstName} {author.lastName}
                    </option>
                  );
                })}
            </select>
            <label className="mt-3" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="image"></label>
            <input
              id="image"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="editorContainer">
              <ReactQuill
                className="editor"
                theme="snow"
                value={content}
                onChange={setContent}
              />
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <button className="btn ">Save</button>
                <Link to={"/admin/blogs"} className="btn m-2">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default AdminBlogForm;

{
  /* {blog.id && <h1>Update Blog: {blog.name}</h1>} */
}
{
  /* {!blog.id && <h1>New Blog</h1>} */
}
// const BlogForm = () => {

//   let { id } = useParams();

//   if (id) {
//     useEffect(() => {
//       setLoading(true);
//       axiosClient
//         .get(`/blogs/${id}`)
//         .then(({ data }) => {
//           setLoading(false);
//           setBlog(data);
//         })
//         .catch(() => {
//           setLoading(false);
//         });
//     }, []);
//   }

//   const onSubmit = (ev) => {
//     ev.preventDefault();
//     if (blog.id) {
//       axiosClient
//         .put(`/blogs/${blog.id}`, blog)
//         .then(() => {
//           setNotification("Blog was successfully updated");
//           navigate("/admin/blogs");
//         })
//         .catch((err) => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors);
//           }
//         });
//     } else {
//       axiosClient
//         .post("/blogs", blog)
//         .then(() => {
//           setNotification("Blog was successfully created");
//           navigate("/admin/blogs");
//         })
//         .catch((err) => {
//           const response = err.response;
//           if (response && response.status === 422) {
//             setErrors(response.data.errors);
//           }
//         });
//     }
//   };
//   return (
//   );
// };

// export default BlogForm;
