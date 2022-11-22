import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import "./job.css";
const Job = () => {
  const jobs = [
    {
      id: 1,
      title: "Rso Proctor",
      description: "Residential Security Officer",
    },
    {
      id: 2,
      title: "ITS",
      description: "Information Technology Services",
    },
    {
      id: 3,
      title: "Dunkin Donuts",
      description: "Customer service",
    },
    {
      id: 4,
      title: "Teaching Assistant",
      description: "Assist professor with class",
    },
  ];
  return (
    <div className="container">
      <Navbar />
      <div className="jobs_container">
        {jobs.map((job) => (
          <Card
            key={job.id}
            header={job.title}
            cardContent={job.description}
            isShowButton
          />
        ))}
      </div>
    </div>
  );
};

export default Job;
