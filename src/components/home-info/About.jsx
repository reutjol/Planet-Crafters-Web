import React from "react";
import "../../styles/Home-info.css";
import SectionTitle from "components/common/SectionTitle";

export default function About() {
  return (
    <div className="about-section">
      <SectionTitle>About</SectionTitle>
      <p className="about text1">
        Planet Crafters is a strategic world-building game set across a vast galactic frontier.
         </p>
        <p className="about text2">
        Start with a single planet and turn it into a thriving world through < br />hex-based expansion and resource management
      </p>
      <p className="about text3">
        Collect, combine, and invest these resources as your planet evolves over time.<br />
        Every decision matters — from how you shape the terrain to how you interact with other players.
       < br /> Craft your path, grow your influence, and watch your world rise among the stars.
      </p>
    </div>
  );
}
