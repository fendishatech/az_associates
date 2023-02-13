import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axiosClient from "../../../api/axios-client";
import Breadcrumb from "../../../components/Breadcrumb";

const Experiences = () => {
  const [experiences, setExperiences] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getExperiences = () => {
      setLoading(true);
      axiosClient
        .get("/public/experiences")
        .then(({ data }) => {
          setLoading(false);
          setExperiences(data.data);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };

    getExperiences();
  }, []);

  return (
    <div className="text-dark">
      <Helmet>
        <title>Zerihun Associates | Experiences</title>
      </Helmet>
      <Breadcrumb innerPage={"Experiences"} />
      {loading && <p>Loading...</p>}
      {!loading && (
        <tbody>
          {/* {experiences.map((e) => (
            <p>{e.title}</p>
          ))} */}
        </tbody>
      )}
    </div>
  );
};

export default Experiences;
