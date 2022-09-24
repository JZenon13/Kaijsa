import React from "react";
import "./productLines.css";
import { useNavigate } from "react-router-dom";

function ProductLines() {
  const navigate = useNavigate();
  return (
    <>
      <div className="productLines">
        <div>
          <img
            onClick={() => navigate("/kaijsasteel")}
            className="productLineImg pointer"
            src="./images/jewelry1.png"
            alt=""
          />
          <h1 className="productLineText">KaijsaSteel</h1>
        </div>
        <div>
          <img
            onClick={() => navigate("/kaijsasterling")}
            className="productLineImg pointer"
            src="./images/jewelry2.png"
            alt=""
          />
          <h1 className="productLineText">Kaijsa Sterling</h1>
        </div>
        <div>
          <img
            onClick={() => navigate("/kaijsatitanium")}
            className="productLineImg pointer"
            src="./images/jewelry3.png"
            alt=""
          />
          <h1 className="productLineText">KaijsaTitanium</h1>
        </div>
      </div>
    </>
  );
}

export default ProductLines;
