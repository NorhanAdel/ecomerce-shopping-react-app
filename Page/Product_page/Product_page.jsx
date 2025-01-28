import React from "react";
import "./Product_page.scss";
import { Product_card } from "../../Component/Product_card/Product_card";
import { BiStar, BiSolidStar } from "react-icons/bi";
import { imges, number, details, type } from "../../Constant";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  Like,
  NabSuplier,
  Navbar,
  Navbar3,
  Nav_bottom,
} from "../../Component/Index";
import { Footer } from "../../Container/Index";
import { BiHeart } from "react-icons/bi";
import { Recomended } from "../Index";
import { Related } from "../../Component/Related/Related";
import { Descriotion } from "../Description/Descriotion";
export const Product_page = () => {
  const apiurl = "https://fakestoreapi.com/products";
  const pram = useParams();
  const [product, setproduct] = useState({});
  const [imgSrc, setsrc] = useState(``);
  useEffect(() => {
    fetch(`${apiurl}/${pram.productId}`)
      .then((response) => response.json())
      .then((product) => setproduct(product));
    setsrc(product.image);
    
  }, [pram.productId, product.image]);
  
  const handel = (e) => {
    setsrc(e.target.src);
  };
  return (
    <div className="_product_page_wrapper">
      <Navbar />

      <Nav_bottom />
      <Navbar3 />
      <div className="_product_container _container">
        <div className="top_part">
          <div className="single_pro_image">
            <img src={imgSrc} id="mainImage" alt="imge" />
            <div className="smallImage">
              {imges.map((image, i) => {
                return (
                  <div className="small-img-col">
                    <img
                      src={image}
                      alt="img"
                      className="small-img"
                      onClick={(ev) => handel(ev)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sigle_details">
            <p>In stock</p>
            <h1>{product.title}</h1>
            {[1, 2, 3, 4].map((item) => {
              return <BiSolidStar />;
            })}
            {[1].map((item) => {
              return <BiStar />;
            })}
            <span>9.5</span>
            <span className="review">32 reviews</span>
            <span className="review">154 sold</span>
            <div className="number">
              {/* {imges.push(product.image)} */}
              {number.map((item) => {
                return (
                  <div className="_number">
                    <h2>{item.num}</h2>
                    <span>{item.des}</span>
                  </div>
                );
              })}
            </div>
            <div className="details">
              <p>
                <span>Price :</span>
                <span className="small_des">{product.price}</span>
              </p>
            </div>
            <div className="details3">
              <p>
                <span>Type:</span>
                <span className="small_des">Clasic Model</span>
              </p>
              <p>
                <span>Matrial:</span>
                <span className="small_des"> Fantastic Matrial</span>
              </p>
              <p>
                <span>Design:</span>
                <span className="small_des">Modern nice</span>
              </p>
            </div>
            <div className="details2">
              <p>
                <span>Customization:</span>
                <span className="small_des">Customize logo and design</span>
              </p>
              <p>
                <span>Protection:</span>
                <span className="small_des">Refund policy</span>
              </p>
              <p>
                <span>Warranty:</span>
                <span className="small_des">2 year Full Warranty</span>
              </p>
            </div>
          </div>
          <div className="supplier_details">
            <div className="supplier_card">
              <div className="_top_part">
                <h2>R</h2>
                <div>
                  <p>
                    Supplier
                    <br />
                    Guanjoi Trading LLC
                  </p>
                </div>
              </div>
              <div className="_bottom_part">
                <p>Germany, Berlin</p>
                <p>Verified Seller</p>
                <p>Worldwide shipping</p>
                <button className="btn btn-primary">Send inquiry</button>
                <button className="btn seller">Seller's profiles</button>
              </div>
            </div>
            <h1>
              <BiHeart /> Save for later
            </h1>
          </div>
        </div>
        <Descriotion />
        <Related />
      </div>
      <div></div>

      <NabSuplier />
      <Footer />
    </div>
  );
};
