import React from "react";
import "./Navbar.scss";
import { Input, Logo } from "../Index";
import {
  BiSolidShoppingBag,
  BiUser,
  BiMessage,
  BiHeart,
  BiCart,
} from "react-icons/bi";
import { navicon } from "../../Constant/navicon";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="_nav_wrapper">
      <div className="_nav_container _container">
        <div className="_nav_logo">
          <Logo />
          <h1>Brand</h1>
        </div>
        <div className="nav_input_feild">
          <Input />
          <button className="btn btn-primary">Search</button>
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
};
