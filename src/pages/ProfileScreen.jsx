import React, { useContext } from "react";
import "../styles/Screens.css";
import Login from "../components/profile/Login.jsx";
import Connect from "../components/profile/Connect.jsx";
import { ProfileContext } from "../components/common/ProfileContext.jsx";

export default function ProfileScreen() {
  const { user } = useContext(ProfileContext);

  return (
      <div className="profile-screen-content">
        {user ? <Connect /> : <Login />}
      </div>
  );
}
