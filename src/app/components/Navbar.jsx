"use client";

import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
          <img src="/Logo.png" alt="Logo of our project" className="logo" />
        </div>

        <div className="navbar-center">
          <h1 className="logo-text">LOGO</h1>
        </div>

        <div className="navbar-right">
          <button className="icon" aria-label="Search">
            <img
              src="/search-normal.png"
              alt="Search icon image"
              className="icon-img"
            />
          </button>
          <button className="icon" aria-label="Favorites">
            <img src="/heart.png" alt="Favorites icon image" className="icon-img" />
          </button>
          <button className="icon" aria-label="Cart">
            <img src="/shopping-bag.png" alt="Cart icon image" className="icon-img" />
          </button>
         
          <div className="hide-on-mobile">
            <button className="icon" aria-label="Profile">
              <img src="/profile.png" alt="Profile icon image" className="icon-img" />
            </button>
            <div className="language-selector icon">
              <span>ENG</span>
              <img
                src="/arrow-left.png"
                alt="Language Arrow icon"
                className="icon-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`navbar-bottom ${menuOpen ? "open" : ""}`}>
        <nav className="navbar-menu">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
