import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      <div className="max-width flex header">
        <img
          src={require('./logo3.png')}
          className="header-logo"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">Home</div>
          <div className="header-nav-item">About us</div>
          <div className="header-nav-item">Our Team</div>
          <div className="header-nav-item">About AuthScate</div>
          <div className="header-nav-item">FAQ</div>
          <button class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}>Careers </button>
          



        </div>
      </div>
    </div>
  );
};

export default Header;
