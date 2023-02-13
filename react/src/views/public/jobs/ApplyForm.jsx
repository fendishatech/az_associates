import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiUpload } from "react-icons/bi";
import { useEffect } from "react";
import axiosClient from "../../../api/axios-client";

const ApplyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    edu_level: "",
    experience_yr: "",
    cv_file: "",
  });
  const [job, setJob] = useState("");

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const onApply = (e) => {
    e.preventDefault();

    const candidate = new FormData();

    candidate.append("first_name", user.first_name);
    candidate.append("last_name", user.last_name);
    candidate.append("edu_level", user.edu_level);
    candidate.append("experience_yr", user.experience_yr);
    candidate.append("cv_file", user.cv_file);
    candidate.append("job_id", id);

    console.log(...candidate);

    axiosClient
      .post(`/public/jobs/apply/`, candidate)
      .then(() => {
        setNotification("Application registered successfully!");
        navigate("/public/jobs");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  useEffect(() => {
    const getJob = async () => {
      const res = await axiosClient.get(`public/jobs/${id}`);

      setJob(res.data.data.title);
    };

    getJob();
  }, []);
  return (
    <div className="container my-5 text-dark contact">
      <h1 className="mb-3">Apply for {job} Position</h1>
      {errors && (
        <div className="alert">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}
      <form onSubmit={onApply}>
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              value={user.first_name}
              onChange={(ev) =>
                setUser({ ...user, first_name: ev.target.value })
              }
              placeholder="Firstname"
              required
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              value={user.last_name}
              onChange={(ev) =>
                setUser({ ...user, last_name: ev.target.value })
              }
              placeholder="Lastname"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="edu_level">Educational Level</label>
            <input
              id="edu_level"
              value={user.edu_level}
              onChange={(ev) =>
                setUser({ ...user, edu_level: ev.target.value })
              }
              placeholder="Example : MSc In Data Science"
              required
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <label htmlFor="experience_yr">Working Experience</label>
            <input
              id="experience_yr"
              value={user.experience_yr}
              onChange={(ev) =>
                setUser({ ...user, experience_yr: ev.target.value })
              }
              placeholder="Experience"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-12">
            <label htmlFor="cv_file">Choose file</label>
            <input
              type="file"
              id="cv_file"
              onChange={(ev) =>
                setUser({ ...user, cv_file: ev.target.files[0] })
              }
              required
            />
            <div id="fileHelpId" className="form-text">
              Your cv file should not be more than 2MB.
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="apply-btn" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
