import React from 'react'
import { offer_number } from '../../Constant';
import { offer_right_side } from '../../Constant/offer_right_side';
import './Deals_offer.scss'
export const Deals_offer = ()=> {
  return (
    <div className="_deals_wrapper">
      <div className="_deals_container _container">
        <div className="_left_offer">
          <h1>Deals and offers </h1>
          <p>Hygine equipment</p>
          <div className="offers">
            {offer_number.map((item, i) => {
              return (
                <p key={i}>
                  {item.number}
                  <br />
                  <span>{item.desc}</span>
                </p>
              );
            })}
          </div>
        </div>
              <div className="_right_offer">
                  
                  {
                      offer_right_side.map((item,i) => {
                          return (
                               <div className="offer">
                                  <img src={ item.image} />
                                  <p>{item.dec}</p>
                                  <span>{ item.price}</span>
                          </div>
                        )
                      })
                 }
        </div>
      </div>
    </div>
  );
}

 