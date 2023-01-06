import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    
    <div className="hero-section-wrapper" 
      img src={require('./logo4.png')}
    >
      
      <div className="flex absolute-center hero-claim-label">
        <div>We are hiring !</div>
        <div className="claim-anchor">
          Apply now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
          />
        </div>
      </div>
      
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          AuthScate 
        </div>
        <div className="hero-subheading">
          NFTs to prevent counterfeiting
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};

export default HeroSection;
