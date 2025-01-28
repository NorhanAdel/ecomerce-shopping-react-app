import { useEffect, useState } from "react";
import { Footer } from "../../Container/Index";
import { BottomFooter, CartContent, CartNavbar, Pay, SavedFor } from "../../Component/Index";
import { NabSuplier} from "../../Component/Index";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { carticon } from "../../Constant/carticon";
export const Cart = () => {
  const apiurl = "https://fakestoreapi.com/products";

  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((product) => setproduct(product));
  }, []);
  return (
    <div className="_cart_wrapper">
           <CartNavbar/>
      <div className="_cart_container _container">
    
        <h1>My Cart</h1>
        <div className="_card1_content">
          <div className="cartContent">
            {product.slice(1, 4).map((p, i) => {
              return (
                <CartContent
                  product={p}
                  index={i}
                  metaData={[product, setproduct]}
                />
              );
            })}
            <div className="btns">
              <Link to={"/features"}> back to shop</Link>
              <button onClick={() => setproduct([])}>Remove All</button>
            </div>
          </div>

          <div className="pay">
            <Pay />
          </div>
        </div>
        <div className="Carticons">
          {
            carticon.map((item) => {
              return (
                  <div className="carticon">
                 <item.icon />
                 <div>
                   <h2>{ item.title}</h2>
                   <p>{item.des}</p>
                 </div>
               </div>
              )
            })
          }
        </div>
        <div className="_saved_cart">
          <h1>Saved for</h1>
          <div>
            <div className="_Saved">
              {product.slice(1, 5).map((p) => {
                return <SavedFor product={p} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <NabSuplier />
      <Footer />
      <BottomFooter/>
    </div>
  );
};
