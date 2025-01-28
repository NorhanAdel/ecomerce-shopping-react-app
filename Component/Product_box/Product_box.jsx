import React from "react";
import "./Product_box.scss";

export const Product_box = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h1>{product.title.slice(0, 20)}</h1>
      <span>
        From <br />
        USD {product.price}
      </span>
    </div>
  );
};
