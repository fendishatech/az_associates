import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getJobs();
  }, []);

  const onDeleteClick = (job) => {
    if (!window.confirm("Are you sure you want to delete this job?")) {
      return;
    }
    axiosClient.delete(`/jobs/${job.id}`).then(() => {
      setNotification("Job was successfully deleted");
      getJobs();
    });
  };

  const getJobs = () => {
    setLoading(true);
    axiosClient
      .get("/jobs")
      .then(({ data }) => {
        setLoading(false);
        setJobs(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
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
        <h1>Jobs</h1>
        <Link className="btn-add" to="/admin/jobs/new">
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
            {jobs.map((u) => (
              <div className="col-md-4">
                <div className="card" style={{ padding: 0 }} key={u.id}>
                  <div className="card-header">Featured</div>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary mt-2">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
