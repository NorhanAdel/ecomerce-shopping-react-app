import React from "react";
import "./CartContent.scss";
export const CartContent = ({ product, index, metaData }) => {
  const [products, setProducts] = metaData;
  return (
    <div className="_cart_Content">
      <div class="left">
        <div className="_cart_image">
          <img src={product.image} alt="" />
        </div>
        <div className="Cart_des">
          <h1>{product.title}</h1>
          <p>
            Size: medium, Color: blue, Material: Plastic Seller<br/>: Best factory
            LLC
          </p>
          <button
            onClick={() => {
              const newProducts = products.filter((p, i) => index !== i);
              setProducts(newProducts);
            }}
            className="remove"
          >
            Remove
          </button>
          <button className="save">Save for later</button>
        </div>
      </div>

      <div className="cartPrice">
        <p>{product.price}$</p>
        <select>
          <option>Qty:1</option>
          <option>Qty:1</option>
        </select>
      </div>
    </div>
  );
};
