import React from "react";
import { Footer } from "../../src/Container/Footer/Footer.jsx";
import { Header } from "../../src/Container/Header/Header.jsx";
import {
  Deals_offer,
  Hero,
  Navbar3,
  Product,
  Sidebar,
  Flag,
  BottomFooter,
} from "../../src/Component/Index.js";
import { Home, Recomended } from "./Index.js";
import { Suplier } from "./Supplier/Suplier.jsx";
import { Extera_service, Top_footer } from "../../src/Container/Index.js";
export const Home_page = () => {
  return (
    <div>
      <Header />
      <Home />
      <Deals_offer />
      <Product />
      <Suplier />
      <Recomended />
      <Extera_service />
      {/* <Flag /> */}
      <Top_footer />
      <Footer />
      <BottomFooter/>
    </div>
  );
};
