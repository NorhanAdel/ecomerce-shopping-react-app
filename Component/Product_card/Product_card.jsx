import React from "react";
import "./Product_card.scss";

export const Product_card = ({ product }) => {
  return (
    <div className="box_card">
      <img src={product.image} alt="" />
      <p>${product.price}</p>
      <h2>{product.title.slice(0,20)}</h2>
    </div>
  );
};
