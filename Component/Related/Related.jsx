  
import React, { useEffect, useState } from "react";
import { Product_card } from "../Product_card/Product_card";
 

import "./Related.scss";
 
export const Related = () => {
      const [Product, setproduct] = useState([]);
      const apiUrl = "https://fakestoreapi.com/products";
      useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((product) => setproduct(product));
      }, []);
  return (
    <div className="_wrapper">
      <div className="_related_container _container">
        <h1>Related items</h1>
        <div className="_cards">
          {Product.slice(1, 6).map((product) => (
            <div className="_card">
              <Product_card product={product} />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
