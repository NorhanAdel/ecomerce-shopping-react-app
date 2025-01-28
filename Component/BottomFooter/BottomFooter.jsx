import React from 'react'
import { BiArrowToTop } from 'react-icons/bi';
import IMG from "../../assets/dropdown_icon.png";
import './BottomFooter.scss'
export const BottomFooter = ()=> {
  return (
    <div className='botfooter_wrapper'>
      <div className="Bofooter_container _container">

              <p>© 2023 Ecommerce. </p>
              <div>
                  <span>
                      English
                      
                  </span> 
                  <img src={IMG} alt=""/>
              </div>
          </div>
          </div>
  );
}
