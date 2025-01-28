import React, { useEffect, useState } from "react";
import { Product_box } from "../Index";
import "./Product.scss";

export const Product = () => {
  const [product, setproduct] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, []);
  return (
    <div className="_product_wrapper">
      <div className="_product_container _container">
        <div className="_top_side">
          <div className="item">
            <h1>
              Home and <br />
              outdoor
            </h1>

            <button>Source now</button>
          </div>
          
        
        <div className="_right_side">
          <div className="_cards">
            {product.slice(0, 8).map((product) => (
              <div className="_card">
                <Product_box product={product} />
              </div>
            ))}
          </div>
        </div>
        </div>
           <div className="_bottom_side">
          
          <div className="item">
            <h1>
              Customer<br />
              electronic and
              <br />
              gadets
            </h1>

            <button>Source now</button>
          </div>
        
        <div className="_right_side">
          <div className="_cards">
            {product.slice(9, 17).map((product) => (
              <div className="_card">
                <Product_box product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
