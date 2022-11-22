import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";

const Contact = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"Contact OGS"}
        cardContent="
        For any information 
        Contact us at:
        857-364-1519
        "
      />
    </div>
  );
};

export default Contact;
