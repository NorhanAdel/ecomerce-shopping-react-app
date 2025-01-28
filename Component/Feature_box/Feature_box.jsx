import React from "react";
import "./Feature_box.scss";
import { Link } from "react-router-dom";
import { BiHeart, BiSolidStar } from "react-icons/bi";
export const Feature_box = ({ product }) => {
  return (
    <div className="Feature_card">
      <img src={product.image} alt="" />
      <div className="details">
        <div className="dec_feature">
          <h1>{product.title.slice(0, 30)}</h1>
          <p className="price">
            ${product.price}
            <span>$1203.00</span>
          </p>
          {[1, 2, 3, 4, 5].map((item) => {
            return <BiSolidStar />;
          })}
          <span>4.5</span>

          <span className="order">. 150 order </span>
          <a href="/" className="shopping">
            {" "}
            . Free Shopping
          </a>

          <p className="des">{product.description.slice(0, 80)}</p>
          <Link to={`/features/${product.id}`}>View details</Link>
        </div>
        <div className="_box_icon">
          <BiHeart />
        </div>
      </div>
    </div>
  );
};
