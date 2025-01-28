import React from 'react'
import './SavedFor.scss'
import { BiCart} from "react-icons/bi";
export const SavedFor = ({product}) => {
    return (
      <div className="_SavedFor_wrapper">
        <img src={product.image} alt="" />

        <p>${product.price}</p>
            <p className='savedtitle'>{product.title.slice(0,20)}</p>
            <button className="btn"> <BiCart/> Move to cart </button>
      </div>
    );
} 