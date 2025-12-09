import React from "react";
import "../../styles/About.css";
import gg from "../../assets/gg.png";
import as from "../../assets/as.png";
import SectionTitle from "components/common/SectionTitle";

export default function About() {
  return (
    <div className="about-section">
      <SectionTitle>About</SectionTitle>
      <p className="about-text">
        Immerse yourself in Planet Crafters; a strategic and enchanting world-building game set across a vast galactic frontier. 
        Collect unique resources, develop your planet through hex-based expansions, and master elemental terrains. Build colonies, upgrade lands,  
        engage with other players, and shape the long-term evolution of your world. Craft your path, grow your influence, and rise among the stars.
      </p>
      <div className="store-container">
        <a href="#">
          <img src={gg} alt="img" className="store-img" />
        </a>
        <a href="#">
          <img src={as} alt="img" className="store-img" />
        </a>
      </div>
    </div>
  );
}
