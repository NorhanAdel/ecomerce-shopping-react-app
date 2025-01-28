import React from "react";
import './Form_suplier.scss'
export const Form_suplier = () => {
  return (
    <div className="_form_wrapper">
      <div className=" _form_container">
        <h1>Send quote to suppliers</h1>
        <input type="text" placeholder="What item you need ?" />
        <textarea placeholder="Type more details"></textarea>
        <div>
          <input placeholder='Quantity'/>
          <select>
            <option>Pcs</option>
            <option>Pcs</option>
            <option>Pcs</option>
          </select>
        </div>
        <button className="btn btn-primary s-btn">Send Quiri</button>
      </div>
    </div>
  );
};
