import React from "react";
import "./home.css";
import ProductLines from "../ProductLines/ProductLines";
import About from "../About/About";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="imgDiv">
        <img
          className="homeImg"
          src="https://robbreport.com/wp-content/uploads/2022/08/estate-jewelry-trends-main.jpg?w=480"
          alt=""
        />
        <img src="./images/Casual_Jeweler_.png" alt="" />

        <button className="btn">
          <b>Casual Collections</b>
        </button>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <ProductLines />
      </div>
      <br></br>
      <hr></hr>
      <div>
        <About />
        <br></br>
        <hr></hr>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Home;
