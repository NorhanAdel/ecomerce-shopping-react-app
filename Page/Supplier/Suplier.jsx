import React from 'react'
import { Form_suplier } from '../../Component/Index';
import './Suplier.scss'
export const Suplier = ()=> {
  return (
    <div className="_supplier_wrapper">
      <div className="_suppler_container _container">
        <div className="_suplier_overlay">
          <div className="_content">
            <h1>
              An easy way to send
              <br />
              request to all suppliers
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              incidunt a cum numquam alias minus odit quam, natus, tenetur
              magnam
            </p>
          </div>
          
                  <div className="_suplier_form">
                      <Form_suplier/>
          </div>
        </div>
      </div>
    </div>
  );
}
