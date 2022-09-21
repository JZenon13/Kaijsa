import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ContactUs from "./ContactUs/ContactUs";
import Home from "./Home/Home";
import ProductLines from "./ProductLines/ProductLines";
import WhereToBuy from "./WhereToBuy/WhereToBuy";
import WholeSaleInquiries from "./WholeSaleInquiries/WholeSaleInquiries";
import KaijsaSteel from "./ProductLines/KaijsaSteel";
import KaijsaSterling from "./ProductLines/KaijsaSterling";
import KaijsaTitanium from "./ProductLines/KaijsaTitanium";
import CasualJeweler from "./About/CasualJeweler";
import EngineeredDesigns from "./About/EngineeredDesigns";
import WorkWithUs from "./About/WorkWithUs";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlines" element={<ProductLines />} />
        <Route path="/buy" element={<WhereToBuy />} />
        <Route path="/wholesale" element={<WholeSaleInquiries />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/kaijsasterling" element={<KaijsaSterling />} />
        <Route path="/kaijsasteel" element={<KaijsaSteel />} />
        <Route path="/kaijsatitanium" element={<KaijsaTitanium />} />
        <Route path="/casualjeweler" element={<CasualJeweler />} />
        <Route path="/engineereddesigns" element={<EngineeredDesigns />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
      </Routes>
      {/* <Link to="#home" smooth>
        Home
      </Link> */}
    </div>
  );
}

export default App;
