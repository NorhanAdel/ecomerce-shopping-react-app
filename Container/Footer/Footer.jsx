import React from 'react'
import { Logo } from '../../Component/Index';
import Imge from '../../assets/images.png';
import { aboutLink, information, partnershipLink, user } from '../../Constant/footerLinks'
import'./Footer.scss'
import { footer_icon } from '../../Constant';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
 
export const  Footer = ()=> {
  return (
    <div className="_wrapper_footer">
      <div className="_footer_container _container">
        <div className="dec">
          <div className="logo">
            <Logo />
            <h1>Brand</h1>
          </div>
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className='footer_icon'>
            <BiLogoFacebook />
            <BiLogoTwitter />
            <BiLogoLinkedin />
            <BiLogoInstagram />
            <BiLogoYoutube />
          </div>
        </div>
        <div className="content">
          <h1>About Us</h1>
          {aboutLink.map((item, i) => {
            return (
              <ul>
                <li key={i}>
                  <a href={item}>{item}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="content">
          <h1>Partnership</h1>
          {partnershipLink.map((item, i) => {
            return (
              <ul>
                <li key={i}>
                  <a href={item}>{item}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="content">
          <h1>Information</h1>
          {information.map((item, i) => {
            return (
              <ul>
                <li key={i}>
                  <a href={item}>{item}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="content">
          <h1> For user</h1>
          {user.map((item, i) => {
            return (
              <ul>
                <li key={i}>
                  <a href={item}>{item}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="content">
          <h1> Get App</h1>
          <img src={Imge} alt="" />
        </div>
      </div>
    </div>
  );
}
