import React from "react";
import "./home.css";
import ProductLines from "../ProductLines/ProductLines";
import About from "../About/About";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="siteText">
        <h1 className="siteTitle">
          <b>Kaijsa</b>
        </h1>
        <h2>by: Casual Jeweler</h2>
      </div>
      <div className="imgDiv">
        {/* <img
          className="homeImg"
          src="https://diamondexchangehouston.com/wp-content/uploads/2021/09/jewelry-exchange.jpg"
          alt=""
        /> */}
        {/* <img className="camoImg" src="./images/BrownCamo.png" alt="" /> */}

        {/* <button className="btn">
          <a href="anotherwebsite"> The Casual Collections</a>
        </button> */}
      </div>
      <br></br>
      {/* <hr></hr> */}
      <div>
        <ProductLines />
      </div>
      {/* <br></br>
      <hr></hr> */}
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <About />
        <br></br>
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default Home;
