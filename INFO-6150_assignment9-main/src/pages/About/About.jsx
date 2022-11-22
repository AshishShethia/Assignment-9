import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import "./about.css";
const About = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"About"}
        cardContent={
          "Workday is a provider of cloud-based software that specializes in applications for financial management enterprise resource planning (ERP) and human capital management (HCM)."
        }
      />
    </div>
  );
};

export default About;
