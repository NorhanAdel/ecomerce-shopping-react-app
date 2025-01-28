import React from "react";
import './Navbar.scss'
import { bottomNavLinks1 } from "../../Constant/navLinks";

export const Navbar3 = () => {
  return (
    <div className="_navbar_wrapper">
      <div className="_navbar_container _container">
        <ul>
          {bottomNavLinks1.map((item) => {
            return (   <li>
              <a href={item}>{item}</a>
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
};
