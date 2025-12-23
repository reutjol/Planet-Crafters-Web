import React from "react";
import "../../styles/Profile.css";
import img from "../../assets/avatar.png";
import { CgLogOut } from "react-icons/cg";

export default function ProfileForm({
  title,
  subtitle,
  name,
  email,
  setname,
  setEmail,
  onSubmit,
  submitText,
  onLogout,
}) {
  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-card">
          <h1 className="login-title">{title}</h1>
          <p className="login-subtitle">{subtitle}</p>
          <form className="login-form" onSubmit={onSubmit}>
            <label className="login-label">
              Full Name
              <input
                className="login-input"
                type="text"
                value={name}
                placeholder="Your full name"
                minLength={3}
                onChange={(e) => setname(e.target.value)}
              />
            </label>
            
            <label className="login-label">
              Email
              <input
                className="login-input"
                type="email"
                value={email}
                placeholder="name@example.com"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            
            <button className="login-btn" type="submit">
              {submitText}
            </button>
            {onLogout && (
              <button className="logout-link" type="button" onClick={onLogout}>
                <CgLogOut size={25} style={{ position: "relative", top: "8px" }} /> Logout
              </button>
            )}
          </form>
        </div>
      </div>
      
      <div className="login-right">
        <img src={img} alt="avatar" className="login-avatar" />
      </div>
    </div>
  );
}
