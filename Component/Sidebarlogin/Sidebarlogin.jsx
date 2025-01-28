import React from 'react'
import { BiUserCircle } from 'react-icons/bi';
import './Sidebarlogin.scss'
export const Sidebarlogin = ()=> {
  return (
    <div className="_wrapper_side_login">
      <div className="_side_login_wrapper">
        <div className="_side_login_part1">
          <div>
            <BiUserCircle />
            <h1>
              Hi,user
              <br />
              let's get stated
            </h1>
          </div>
          <button className="join">Join Now</button>
          <button className="login-btn">Log in</button>
        </div>
        <div className="_side_login_part2">
          <h1>
            Get US $10 off
            <br />
            with a new <br />
            supplier
          </h1>
        </div>
        <div className="_side_login_part3">
          <h1>
            Send to quotes with
            <br />
            supplier
                      <br />
                      preferences
          </h1>
        </div>
      </div>
    </div>
  );
}
