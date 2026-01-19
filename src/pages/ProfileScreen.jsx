import React from "react";
import "../styles/pages.css";
import Login from "../components/profile/Login.jsx";
import Connect from "../components/profile/Connect.jsx";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const user = useSelector((state) => state.user.user);

  return (
      <div className="profile-screen-content">
        {user ? <Connect /> : <Login />}
      </div>
  );
}
