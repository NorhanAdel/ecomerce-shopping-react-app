import React, { useEffect, useState } from 'react'
import { Header } from "../../Container/Header/Header.jsx";
import { BottomFooter, Feature, Navbar3, Sidebar } from '../../Component/Index';
import { Top_footer as TopFooter } from '../../Container/Index';
import { Footer } from '../../Container/Footer/Footer.jsx';
 import './Feature_page.scss'
export default function Feature_page() {
   const [product, setproduct] = useState([]);
   const apiUrl = "https://fakestoreapi.com/products";
   useEffect(() => {
     fetch(apiUrl)
       .then((res) => res.json())
       .then((product) => setproduct(product));
   }, []);
  return (
    <div className="_feature_page_wrapper">
      <div className="_Feature_page_container _container">
        <Header />
        <div className="content_feature">
          <Navbar3 />
          <div className="con">
            <Sidebar setproduct={setproduct} />
            <Feature product={product} />
          </div>
        </div>
      </div>
      <TopFooter />
      <Footer />
      <BottomFooter />
    </div>
  );
}
