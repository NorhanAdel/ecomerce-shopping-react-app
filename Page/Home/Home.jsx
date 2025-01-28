import React from 'react'
import { Hero, Sidebarlogin, Slidebar } from '../../Component/Index'
import './Home.scss'
export const Home = ()=> {
  return (
    <div className="_home_wrapper">
      <div className="_home_container _container">
        <Slidebar />
        <Hero />
        <Sidebarlogin />
      </div>
    </div>
  );
}
