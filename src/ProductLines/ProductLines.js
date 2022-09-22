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
            src="https://cdn.shopify.com/s/files/1/1191/6502/articles/Stainless-Steel-Jewelry-Set_grande.jpg?v=1501584287"
            alt=""
          />
          <h1 className="productLineText">KaijsaSteel</h1>
        </div>
        <div>
          <img
            onClick={() => navigate("/kaijsasterling")}
            className="productLineImg pointer"
            src="http://cdn.shopify.com/s/files/1/1749/7309/articles/1800x1000_Sterling_Silver_Facts.jpg?v=1564170705"
            alt=""
          />
          <h1 className="productLineText">Kaijsa Sterling</h1>
        </div>
        <div>
          <img
            onClick={() => navigate("/kaijsatitanium")}
            className="productLineImg pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgdKAbTyHlNKW6CMv7mnxvEHRNhWH-ElsFw&usqp=CAU"
            alt=""
          />
          <h1 className="productLineText">KaijsaTitanium</h1>
        </div>
      </div>
    </>
  );
}

export default ProductLines;
