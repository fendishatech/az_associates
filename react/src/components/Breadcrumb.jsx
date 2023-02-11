import React from "react";

const Breadcrumb = ({ innerPage }) => {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>{innerPage}</li>
        </ol>
        <h2>{innerPage}</h2>
      </div>
    </section>
  );
};

export default Breadcrumb;
