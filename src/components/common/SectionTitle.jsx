import React from "react";
import "../../styles/Common.css";

export default function SectionTitle({ children }) {
  return (
    <div className="about-title-wrapper">
      <span className="line"></span>
      <span className="dot"></span>
      <h1 className="about-title">{children}</h1>
      <span className="dot"></span>
      <span className="line"></span>
    </div>
  );
}