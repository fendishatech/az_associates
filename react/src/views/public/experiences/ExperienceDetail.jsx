import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../api/axios-client";

const ExperienceDetail = () => {
  const [experience, setExperience] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getExperience = () => {
      setLoading(true);
      axiosClient
        .get(`/public/experiences/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setExperience(data.data);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };

    getExperience();
  }, []);
  console.log({ experience });
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ExperienceDetail;
