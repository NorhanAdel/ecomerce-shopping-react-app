 
import React, { useEffect, useState } from "react";
import './Like.scss'
import { LikeCard } from "../Index";
export const Like = () => {
      const [product, setproduct] = useState([]);
      const apiUrl = "https://fakestoreapi.com/products";
      useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((product) => setproduct(product));
      }, []);
  return (
    <div className="_like_wrapper">
      <div className="like_container _container">
        <h1>You may like</h1>
        {product.slice(15, 20).map((product) => {
          return <LikeCard product={product} />;
        })}
      </div>
    </div>
  );
};
