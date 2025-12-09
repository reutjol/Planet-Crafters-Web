import React from "react";
import img from "../../assets/home.png";
import "../../styles/GameTitle.css";

export default function GameTitle() {
  return (
   <div className="game-title">
      <img src={img} alt="img" className="img" />
    </div>
  );
}