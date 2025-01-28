import React from "react";
import "./FeatureCard.scss";
import { BiSolidStar } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";

export const FeatureCard = ({ product }) => {
  return (
    <div className="feature-card">
      <div className="container">
        <div className="img-box">
          <img src={product.image} alt="" />
        </div>
        <div className="text-box">
          <div className="feature_price">
            <h1>${product.price}</h1>
            <BiHeart />
          </div>
          {[1, 2, 3, 4, 5].map((item) => {
            return <BiSolidStar />;
          })}
          <span>4.5</span>
           
          <p>{product.title.slice(0,30)}</p>
        </div>
      </div>
    </div>
  );
};
