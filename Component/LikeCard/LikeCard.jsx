import React from 'react'
import "./LikeCard.scss"
export const LikeCard = ({ product }) => {
  return (
    <div className="_like_card">
      <div className="imges">
        <img src={product.image} alt="" />
      </div>
      <div className="con-card">
        <h1>{product.title.slice(0, 25)}</h1>
        <p>$7.00 - $99.50</p>
      </div>
    </div>
  );
};
