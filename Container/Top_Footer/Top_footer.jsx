import React from 'react'
import './Top_footer.scss'
export const Top_footer = ()=> {
  return (
    <div className="_top_footer_">
      <div className="_top_footer_container _container">
        <h1>Subscribe on our newsletter</h1>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <input type="email" placeholder="Email" />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  );
}
