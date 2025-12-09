import React from "react";
import icon from "../../assets/logo.png";
import "../../styles/HomeScreen.css";

export default function Header({ onAboutClick, onCommentsClick, onLogoClick }) {
  return (
    <div className="custom-header">
      <img
        src={icon}
        alt="logo"
        className="header-logo"
        onClick={onLogoClick}
        style={{ cursor: "pointer" }}
      />
      <nav className="nav-links">
        <button className="nav-link" onClick={onAboutClick}>
          About
        </button>
        <button className="nav-link" onClick={onCommentsClick}>
          Comments
        </button>
      </nav>
    </div>
  );
}
