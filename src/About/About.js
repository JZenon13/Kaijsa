import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="center"></h1>
      <div className="aboutPages">
        <div>
          <img
            onClick={() => navigate("/casualjeweler")}
            className="aboutPageImg pointer"
            src="./images/Casual_Jeweler_.png"
            alt=""
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/engineereddesigns")}
            className="aboutPageImg pointer"
            src="./images/Engineered_Design.png"
            alt=""
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/workwithus")}
            className="aboutPageImg pointer"
            src="./images/Work_With_Us.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default About;
