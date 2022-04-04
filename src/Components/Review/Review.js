import React from "react";
import useReview from "../../hooks/useReview";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./Review.css";

const Review = () => {
  const [reviews] = useReview();
  return (
    <div className="review-container">
      <h1>All Reviews</h1>
      <div className="customer-reviews">
        {reviews.map((review) => (
          <CustomerReview review={review} key={review.id}></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
