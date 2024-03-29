import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brand } from "../../../assets/Images";
import { Helmet } from "react-helmet-async";
import axiosClient from "../../../api/axios-client";
import Breadcrumb from "../../../components/Breadcrumb";

const Jobs = () => {
  const [jobs, setJobs] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getJobs = () => {
      setLoading(true);
      axiosClient
        .get("/public/jobs")
        .then(({ data }) => {
          setLoading(false);
          setJobs(data.data);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };

    getJobs();
  }, []);

  console.log({ jobs });

  return (
    <div className="text-dark">
      <Helmet>
        <title>Zerihun Associates | Jobs</title>
      </Helmet>

      <Breadcrumb innerPage={"Jobs"} />

      <div className="my-5 text-dark">
        <div className="section-title">
          <span>We are Hiring!</span>
          <h2>We are Hiring!</h2>
          <p>We are looking for qualified talent in the following job posts</p>
        </div>
        {loading && <p>Loading...</p>}
        {!loading &&
          jobs.length > 0 &&
          jobs.map((job, index) => {
            return (
              <div className="container job-card-shadow p-4" key={index}>
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex align-items-center g-4">
                      <img
                        style={{ width: "54px", height: "51px" }}
                        className="img-fluid"
                        src={Brand}
                        alt=""
                      />
                      <p className="px-4 text-danger">Zerihun Associates</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="d-flex flex-column">
                      <h2>{job.title}</h2>
                      <div className="d-flex justify-content-between">
                        <p>Zerihun Associates</p>
                        <p>Addis Ababa</p>
                        <p>{job.deadline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex flex-column gap-3">
                    <button className="btn btn-outline-success px-5 rounded-pill">
                      Full Time
                    </button>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="btn btn-outline-success px-5 rounded-pill"
                    >
                      See Details {job.id}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Jobs;

const JobCard = () => {
  return (
    <div className="container job-card-shadow p-4">
      <div className="row">
        <div className="col-md-2">
          <img className="img-fluid" src={Brand} alt="" />
        </div>
        <div className="col-md-7">
          <div className="d-flex flex-column">
            <h2>Job Title</h2>
            <div className="d-flex justify-content-between">
              <p>Zerihun Associates</p>
              <p>Location</p>
              <p>Deadline</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex flex-column gap-3">
          <button className="btn btn-outline-success px-5 rounded-pill">
            Full Time
          </button>
          <Link
            to="/jobs/2"
            className="btn btn-outline-success px-5 rounded-pill"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};
