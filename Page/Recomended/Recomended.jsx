import React, { useEffect, useState } from "react";
import { Product } from "../../Component/Index";
import { Product_card } from "../../Component/Product_card/Product_card";
 
import "./Recomended.scss";

export const Recomended = () => {
  const [Product, setproduct] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, []);
  return (
    <div className="_product_wrapper">
      <div className="_recomended_container _container">
        <h1>Recomended</h1>
        <div className="_cards">
          {Product.slice(1,11).map((product) => (
            <div className="_card">
              <Product_card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
