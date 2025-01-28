import { Footer } from "./Container/Footer/Footer.jsx";
import { Header } from "../src/Container/Header/Header.jsx";
import "./App.scss";
import {
  Deals_offer,
  Hero,
  Navbar3,
  Product,
  Sidebar,
  Flag,
  Feature,
} from "./Component/Index.js";
import { Home, Recomended, Home_page, Product_page, Profile } from "./Page/Index.js";
import { Suplier } from "./Page/Supplier/Suplier.jsx";
import { Extera_service, Top_footer } from "./Container/Index.js";
import Feature_page from "./Page/Feature_page/Feature_page.jsx";
import { Route, Routes } from "react-router";
import { Cart } from "./Page/Index.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/features" element={<Feature_page />} />
        <Route path="/features/:productId" element={<Product_page />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
