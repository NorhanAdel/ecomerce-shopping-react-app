import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbCategory, TbMenu } from "react-icons/tb";
import "boxicons";
import "./Feature_top.scss";
import { setOpen } from "../../store/reducer/FeatureReducer";
export const Feature_top = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.feature.isOpen);
  return (
    <div className="_feature_top_wrapper">
      <div className="_feature_top_container ">
        <h1 className="_title">
          12,911 items in <span>Mobile accessory</span>
        </h1>
        <div className="_content">
          <input type="checkbox" /> <span>Verified only</span>
          <select>
            <option>Feature</option>
            <option>Feature</option>
          </select>
          <div className="box-icon-wrapper">
            <div>
              <TbCategory
                id="custom-icon"
                class={!isOpen ? "active" : ""}
                onClick={(ev) => {
                  dispatch(setOpen(false));
                }}
              />
              <TbMenu
                id="custom-icon"
                class={isOpen ? "active" : ""}
                onClick={() => dispatch(setOpen(true))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
