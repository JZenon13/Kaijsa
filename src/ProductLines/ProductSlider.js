import React, { useState } from "react";
import { ProductLineSliderData } from "./ProductLineSliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const length = ProductLineSliderData.length;

  function prevSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function nextSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  return (
    <div className="slider">
      <FaArrowAltCircleLeft
        className="leftSliderArrow"
        onClick={() => prevSlide()}
      />
      {ProductLineSliderData.map((data, index) => {
        return (
          <div
            key={index}
            className={index === current ? "activeSlide" : "slide"}
          >
            {index === current && (
              <img className="sliderImg" src={data.image} alt="" />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight
        className="rightSliderArrow"
        onClick={() => nextSlide()}
      />
      {/* 
      <span class="material-symbols-outlined" id="btn">
        arrow_circle_right
      </span> */}
    </div>
  );
}

export default ProductSlider;
