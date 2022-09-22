import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="footerLinks">
          <Link to="/">Home</Link>
          <Link to="/productlines">Product Lines</Link>
          <Link to="buy">Where To Buy</Link>
          <Link to="/wholesale">Wholesale Inquiries</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
