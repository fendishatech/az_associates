import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios-client.js";
import { useStateContext } from "../../../context/ContextProvider.jsx";

export default function AdminJobForm() {
  const navigate = useNavigate();

  let { id } = useParams();

  const [job, setJob] = useState({
    id: null,
    title: "",
    level: "",
    posted_at: "",
    deadline: "",
    edu_level: "",
    experience_yr: "",
    description: "",
  });

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  if (id) {
    useEffect(() => {
      setLoading(true);
      axiosClient
        .get(`/jobs/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setJob(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }, []);
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (job.id) {
      axiosClient
        .put(`/jobs/${job.id}`, job)
        .then(() => {
          setNotification("Job was successfully updated");
          navigate("/admin/jobs");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient
        .post("/jobs", job)
        .then(() => {
          setNotification("Job was successfully created");
          navigate("/admin/jobs");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <>
      {job.id && <h1>Update Job: {job.name}</h1>}
      {!job.id && <h1>New Job</h1>}
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
          <form onSubmit={onSubmit}>
            <label htmlFor="title"></label>
            <input
              value={job.name}
              onChange={(ev) => setJob({ ...job, name: ev.target.value })}
              placeholder="Name"
            />
            <input
              value={job.email}
              onChange={(ev) => setJob({ ...job, email: ev.target.value })}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(ev) => setJob({ ...job, password: ev.target.value })}
              placeholder="Password"
            />
            <input
              type="password"
              onChange={(ev) =>
                setJob({ ...job, password_confirmation: ev.target.value })
              }
              placeholder="Password Confirmation"
            />
            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </>
  );
}
