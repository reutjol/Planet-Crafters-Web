import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../styles/Common.css";
import { IoIosCheckmark } from "react-icons/io";
import { useContext } from "react";
import { ProfileContext } from "../common/ProfileContext";
import icon from "../../assets/icon.png";
import logo from "../../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(ProfileContext);

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    navigate({ pathname: "/", hash: `#${id}` }, { replace: false });
  };

  return (
    <header className="custom-header">
      <nav className="nav-left">
        <button className="nav-link" onClick={() => goToSection("title")}>
          <img src={logo} alt="home" className="img-logo" />
        </button>

        <button className="nav-link" onClick={() => goToSection("about")}>
          About
        </button>

        <button className="nav-link" onClick={() => goToSection("overview")}>
          Overview
        </button>
      </nav>

      <nav className="nav-right">
        <NavLink
          to="/comments"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Comments
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <div className="profile-icon-wrapper">
            <img src={icon} alt="profile" className="img-icon" />

            {user && (
              <IoIosCheckmark className="profile-check" />
            )}
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
