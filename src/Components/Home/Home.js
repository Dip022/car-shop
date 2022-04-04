import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import image from "../../image/car.png";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";

const Home = () => {
  const [reviews] = useReview();
  return (
    <div className="home-container">
      <div className="car-container">
        <div className="car-details">
          <h1>Car Collection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            alias fugit rem, possimus incidunt laudantium perspiciatis dolore
            quod voluptatum eaque officiis sunt ut, quia minus exercitationem
            tenetur tempore facilis necessitatibus?
          </p>
          <button type="button">Live Demo</button>
        </div>
        <div className="car-img">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="review-container">
        <h1>Customer Review(3) </h1>
        <div className="customer-reviews">
          {reviews.slice(0, 3).map((review) => (
            <CustomerReview review={review} key={review.id}></CustomerReview>
          ))}
        </div>
        <div className="see-all-review">
          <Link className="car-review" to="/review">
            See All Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
