import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <>
      <h1 className="siteTitle">
        <b>Kaijsa</b>
      </h1>
      <header>
        <Link to="/">Home</Link>
        <Link to="/productlines">Product Lines</Link>
        <Link to="buy">Where To Buy</Link>

        {searchBar ? (
          <>
            <input type="text" className="searchBox"></input>
            {"  "}
            <b className="pointer" onClick={() => setSearchBar(!searchBar)}>
              X
            </b>
          </>
        ) : (
          <img
            onClick={() => setSearchBar(!searchBar)}
            className="searchImg pointer"
            src="https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-30.jpg"
            alt=""
          />
        )}

        <Link to="/wholesale">Wholesale Inquiries</Link>
        <Link to="/contactus">Contact Us</Link>
      </header>
    </>
  );
}

export default NavBar;
