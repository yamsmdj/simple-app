import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="card mt-3" style={{width: '18rem'}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Show recipe</p>
      </div>
    </div>
  );
};

export default Card;
