import { useState } from "react";
import { useEffect } from "react";
import {
  sidebar1,
  sidebar2,
  sidebar3,
  condition,
} from "../../Constant/sidebar";
import "./Sidebar.scss";
import { BiStar, BiSolidStar } from "react-icons/bi";
export const Sidebar = ({ setproduct }) => {
  const getproduct = () => {
    fetch(product_url)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  };
  const getcategory = () => {
    fetch(`${product_url}/categories`)
      .then((res) => res.json())
      .then((data) => setcategory(data));
  };
  const getproductIncat = (cat) => {
    fetch(`${product_url}/category/${cat}`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  };
  const product_url = "https://fakestoreapi.com/products";
  const [category, setcategory] = useState([]);
  useEffect(() => {
    getproduct();
    getcategory();
  }, []);
  return (
    <div className="_sidebar1_wrapper">
      <div className="Sidebar1_container _container">
        <div className="items">
          <h1>Category</h1>
          <ul>
            {category.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    getproductIncat(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
            <li>
              <a href="#" className="see_all">
                see all
              </a>
            </li>
          </ul>
        </div>
        <div className="items">
          <h1>Brand</h1>
          <ul>
            {sidebar2.map((item, i) => {
              return (
                <li key={i}>
                  <input type="checkbox" /> <span>{item}</span>
                </li>
              );
            })}
           
            <li>
              <a href="#" className="see_all">
                see all
              </a>
            </li>
          </ul>
        </div>
        <div className="items">
          <h1>Feature</h1>
          <ul>
            {sidebar3.map((item, i) => {
              return (
                <li key={i}>
                  <input type="checkbox" /> <span>{item}</span>
                </li>
              );
            })}
            <li>
              <a href="#" className="see_all">
                see all
              </a>
            </li>
          </ul>
        </div>
        <div className="items">
          <h1>Price range</h1>
          <input type="range" className="range" />
          <div className="form">
            <div className="inputs_field">
              <div className="input_field">
                <label>Min</label>
                <input type="number" />
              </div>
              <div className="input_field">
                <label>Max</label>
                <input type="number" />
              </div>
            </div>
            <button>Applay</button>
          </div>
        </div>
        <div className="items">
          <h1>Condition</h1>
          <ul className="condition">
            {condition.map((item) => {
              return (
                <li>
                  <fieldset>
                    <input type="radio" />
                    <span>{item}</span>
                  </fieldset>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="items">
          <h1>Rating</h1>
          <input type="checkbox" />
          {[1, 2, 3, 4, 5].map((item) => {
            return <BiSolidStar />;
          })}
          <div className="sideIcon">
            <input type="checkbox" />
            {[1, 2, 3, 4].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>

          <div className="sideIcon">
            <input type="checkbox" />
            {[1, 2, 3].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1, 2].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>
          <div className="sideIcon">
            <input type="checkbox" />
            {[1, 2].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1, 2, 3].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>
          <div className="sideIcon">
            <input type="checkbox" />
            {[1].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1, 2, 3, 4].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
