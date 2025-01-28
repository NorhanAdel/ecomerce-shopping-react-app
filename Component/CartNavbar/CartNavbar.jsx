import React from 'react'
import './CartNavbar.scss'
import {  Logo } from "../Index";
 
import { navicon } from "../../Constant/navicon";
import { Link } from "react-router-dom";
export const CartNavbar = () => {
  return (
    <div className="_nav_wrapper">
      <div className="_nav_container _container">
        <div className="_nav_logo">
          <Logo />
          <h1>Brand</h1>
        </div>
       
        <div className="_nav_icons">
          {navicon.map((item, index) => (
            <Link to={`/${item.href}`}>
              <div className="_nav_icon">
                <item.Icon />
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
