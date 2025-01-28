import React from 'react'
import "./Pay.scss"
import Img1 from "../../assets/online-payment-methods-systems-icons-260nw-2275293633.webp"
export const Pay = () => {
    return (
      <div className="_pay_wrapper">
        <div className="_pay_container">
          <div className="cpon">
            <h4>Have a coupon ?</h4>
            <input type="text" placeholder="Add coupon" />
            <button>Apply</button>
          </div>
          <div className="total">
            <div className="total_deatails">
              <p>
                Subtotal: <span className="subtotal">$1524</span>
              </p>
              <p>
                Discount: <span className="discount">- $60.00</span>
              </p>
              <p>
                Tax: <span className="tax">$84</span>
              </p>
            </div>
            <div className="_check_out">
              <p>
                Total: <span>$15782</span>
              </p>
              <button className="btn check">Check out</button>
            </div>
            <img src={Img1} alt="" />
          </div>
        </div>
      </div>
    );
}