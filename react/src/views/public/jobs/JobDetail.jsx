import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../api/axios-client";

import { GoCalendar } from "react-icons/go";
import { TfiAlarmClock, TfiMapAlt } from "react-icons/tfi";
import { SlBriefcase } from "react-icons/sl";
import { Link } from "react-router-dom";
const JobDetail = () => {
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getJob = () => {
      setLoading(true);
      axiosClient
        .get(`/public/jobs/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setJob(data.data);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };

    getJob();
  }, []);

  console.log({ job });
  return (
    <div
      className="container mt-5 text-dark portfolio-details"
      id="portfolio-details"
    >
      <div className="row">
        <div className="col-md-8">
          <h2>Job Overview</h2>
          {job.length != "" && <JobDescription id={id} job={job} />}
        </div>
        {job.length != "" && <JobOverview id={id} job={job} />}
      </div>
    </div>
  );
};

export default JobDetail;

const JobDescription = ({ id, job }) => {
  return (
    <div className="p-2 my-5">
      <h5 className="job-highlight my-3">{job.title}</h5>
      <p>{job.description}</p>
      <h5 className="job-highlight my-3">Requirement</h5>
      <p>{job.description}</p>
      <h5 className="job-highlight my-3">Posted at</h5>
      <p>{job.postedAt}</p>
      <h5 className="job-highlight my-3">Deadline</h5>
      <p>{job.deadline}</p>
    </div>
  );
};

const JobOverview = ({ id, job }) => {
  return (
    <div class="col-lg-4">
      <div class="portfolio-info">
        <h3>Job Overview</h3>
        <ul>
          <li>
            <GoCalendar size={18} />
            <strong className="mx-2">Date Posted</strong>: {job.deadline}
          </li>
          <li>
            <TfiAlarmClock size={18} />
            <strong className="mx-2">Deadline</strong>: {job.postedAt}
          </li>
          <li>
            <TfiMapAlt size={18} />
            <strong className="mx-2">Location</strong>: Addis Ababa, Ethiopia
          </li>
          <li>
            <SlBriefcase size={18} />
            <strong className="mx-2">Job title</strong>:{" "}
            <a href="#">{job.title}</a>
          </li>
          <div className="apply-btn-container">
            <Link to={`"/apply/${id}`} className="apply-btn">
              Apply Now
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};
