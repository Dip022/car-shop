import React from "react";
import "./CarReview.css";

const CarReview = (props) => {
  const { name, img, review, rating } = props.review;
  return (
    <div className="review">
      <div className="review-details">
        <img src={img} alt="" />
        <h2>{name}</h2>
      </div>
      <p>Review: {review}</p>
      <h4>Rating: {rating}</h4>
    </div>
  );
};

export default CarReview;
