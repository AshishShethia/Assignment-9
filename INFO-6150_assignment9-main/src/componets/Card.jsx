import React from "react";
import "./card.css";
const Card = ({ header, cardContent, isShowButton }) => {
  return (
    <div className="card_container">
      <h1 className="card_header">{header}</h1>
      <p className="card_content">{cardContent}</p>
      {isShowButton && <button className="card_button">Apply</button>}
    </div>
  );
};

export default Card;
