import React, { useEffect, useState } from "react";
import { Feature_box, Feature_top, FeatureCard } from "../Index";
import "./Feature.scss";
import { useSelector } from "react-redux";
import { arrowLink } from "../../Constant/arrow";
import { Link } from "react-router-dom";
export const Feature = ({ product }) => {
  const isOpen = useSelector((state) => state.feature.isOpen);

  return (
    <div className="_feature_wrapper">
      <Feature_top />

      {isOpen &&
        product.slice(9, 14).map((p) => (
          <div className="_card">
            <Feature_box product={p} />
          </div>
        ))}

      {!isOpen && (
        <div className="_box">
          {product.slice(1, 10).map((p) => (
            <Link to={`/features/${p.id}`}>
              <FeatureCard product={p} />
            </Link>
          ))}
        </div>
      )}
      <div className="_arrow">
        <select>
          <option>show 10</option>
        </select>
        <div>
          {arrowLink.map((item) => {
            return <a href="/">{item}</a>;
          })}
        </div>
      </div>
    </div>
  );
};
