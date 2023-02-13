import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../api/axios-client";
import { Pt2 } from "../../../assets/Images";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getBlog = () => {
      setLoading(true);
      axiosClient
        .get(`/public/blogs/${id}`)
        .then(({ data }) => {
          console.log({ data });
          setLoading(false);
          setBlog(data.data);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };

    getBlog();
  }, []);
  console.log({ blog });
  return (
    <div className="container text-dark">
      <div className="row  mt-4">
        <div className="col-md-8">
          <img
            className="img-fluid"
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
            alt=""
          />
          <p>by : Author Name</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            harum, voluptatibus reprehenderit dicta eaque debitis quod
            voluptates cumque, asperiores, adipisci dolorum temporibus?
            Provident fuga officia quo corrupti, eaque eos iure quam quod? Cum
            voluptatem molestias explicabo obcaecati non veritatis perspiciatis
            itaque recusandae omnis nam illo optio deserunt, fugiat, sapiente
            repellat!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            harum, voluptatibus reprehenderit dicta eaque debitis quod
            voluptates cumque, asperiores, adipisci dolorum temporibus?
            Provident fuga officia quo corrupti, eaque eos iure quam quod? Cum
            voluptatem molestias explicabo obcaecati non veritatis perspiciatis
            itaque recusandae omnis nam illo optio deserunt, fugiat, sapiente
            repellat!
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              harum, voluptatibus reprehenderit dicta eaque debitis quod
              voluptates cumque, asperiores, adipisci dolorum temporibus?
              Provident fuga officia quo corrupti, eaque eos iure quam quod? Cum
              voluptatem molestias explicabo obcaecati non veritatis
              perspiciatis itaque recusandae omnis nam illo optio deserunt,
              fugiat, sapiente repellat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              harum, voluptatibus reprehenderit dicta eaque debitis quod
              voluptates cumque, asperiores, adipisci dolorum temporibus?
              Provident fuga officia quo corrupti, eaque eos iure quam quod? Cum
              voluptatem molestias explicabo obcaecati non veritatis
              perspiciatis itaque recusandae omnis nam illo optio deserunt,
              fugiat, sapiente repellat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              harum, voluptatibus reprehenderit dicta eaque debitis quod
              voluptates cumque, asperiores, adipisci dolorum temporibus?
              Provident fuga officia quo corrupti, eaque eos iure quam quod? Cum
              voluptatem molestias explicabo obcaecati non veritatis
              perspiciatis itaque recusandae omnis nam illo optio deserunt,
              fugiat, sapiente repellat!
            </p>
          </p>
        </div>
        <div className="col-md-4">Posts By Same Author</div>
      </div>
    </div>
  );
};

export default BlogDetail;
