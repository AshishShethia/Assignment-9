import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"Welcome to Workday"}
        cardContent={
          "This is a job board for finding oncampus jobs at Northeastern University"
        }
      />
    </div>
  );
};

export default Home;
