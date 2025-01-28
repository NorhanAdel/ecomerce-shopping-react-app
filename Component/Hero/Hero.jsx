import React from 'react'
import './Hero.scss'
import {Link} from 'react-router-dom'
export const Hero = ()=> {
  return (
    <div className="_hero_wraper">
      <div className="_hero_container _container">
        <h2>Latest Trending</h2>
        <h1>Electronic Item</h1>
        <button>
          {" "}
          <Link to='/features'>Learn More</Link>
        </button>
      </div>
    </div>
  );
}
