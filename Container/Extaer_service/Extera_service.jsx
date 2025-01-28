import React from "react";
import { service_content } from "../../Constant/Service_content";
import "./Extera_service.scss";
export const Extera_service = () => {
  return (
    <div className="_service_wrapper">
      <div className="_service_container _container">
        <h1>Our extra service</h1>
        <div className="_services">
          {service_content.map((item, index) => {
            return (
              <div className="service">
                <img src={item.imges} alt="img" />
                <h1>{item.title}</h1>
                <span>
                  {" "}
                  <item.icon />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
