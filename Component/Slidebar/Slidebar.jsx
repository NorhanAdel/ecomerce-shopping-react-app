import React from "react";
import "./Slidebar.scss";
import { slideLink } from "../../Constant";
export const Slidebar = () => {
  return (
    <div className="_slidebar_wrapper">
      <div className="_slide_wrapper _container">
        {slideLink.map((item, index) => {
          return (
            
            
              <a href="/">{item}</a>
            
          );
        })}
      </div>
    </div>
  );
};
