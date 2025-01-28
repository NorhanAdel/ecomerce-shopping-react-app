import React, { useEffect, useState } from "react";
import "./Nav_bottom.scss";
import IMG from "../../assets/dropdown_icon.png";
import IMG2 from "../../assets/flag"
import {
  BiArrowFromBottom,
  BiArrowToBottom,
  BiDownArrowAlt,
  BiMenu,
  BiSolidArrowFromBottom,
} from "react-icons/bi";
import { useRef } from "react";
import { bottomNavLinks } from "../../Constant/navLinks";
export const Nav_bottom = () => {
  const [isVisibleOne, setVisibleOne] = useState(false);
  const [isVisibleTwo, setVisibleTwo] = useState(false);
  const [isVisibleThere, setVisibleThere] = useState(false);
  const submenu1 = useRef(null);
  const submenu2 = useRef(null);
  const submenu3 = useRef(null);

  useEffect(() => {
    const removeVisible = (e) => {
      if (e.target.contains(submenu1.current)) setVisibleOne(false);
      if (e.target.contains(submenu2.current)) setVisibleTwo(false);
      if (e.target.contains(submenu3.current)) setVisibleThere(false);
      // console.log(0);
    };
    window.addEventListener("click", removeVisible);
    return () => {
      window.removeEventListener("click", removeVisible);
    };
  }, []);

  return (
    <div className="nav_botm_wrapper">
      <div className="nav_bot_container _container">
        <div className="__wrapper">
          <div className="__wrapper_item">
            <BiMenu />
            {bottomNavLinks.map((item, i) => (
              <a href="/" key={item + i}>
                {item}
              </a>
            ))}
            <ul className="menu">
              <li onClick={() => setVisibleOne(true)} ref={submenu1}>
                <span>
                  <img src={IMG} alt="img" />
                </span>
                {isVisibleOne && (
                  <ul className="submenu">
                    <li>Category1</li>
                    <li>Category2</li>
                    <li>Category3</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="__wrapper_item">
            <ul className="menu">
              <li onClick={() => setVisibleTwo(true)} ref={submenu2}>
                <span>
                  English,USD <img src={IMG} alt="img" />
                </span>
                {isVisibleTwo && (
                  <ul className="submenu">
                    <li>Category1</li>
                    <li>Category2</li>
                    <li>Category3</li>
                  </ul>
                )}
              </li>
            </ul>
            <ul className="menu">
              <li onClick={() => setVisibleThere(true)} ref={submenu3}>
                <span>
                  Ship To <span class="fi fi-am fis"></span>{" "}
                  <img src={IMG} alt="img" />
                </span>
                {isVisibleThere && (
                  <ul className="submenu">
                    <li>Category1</li>
                    <li>Category2</li>
                    <li>Category3</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
