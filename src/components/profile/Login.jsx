import React, { useContext, useState } from "react";
import { ProfileContext } from "../common/ProfileContext";
import ProfileForm from "./ProfileForm";

export default function Login() {
  const { login } = useContext(ProfileContext);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    login({
      name: name.trim(),
      email: email.trim(),
    });
  };

  return (
    <ProfileForm
      title="Welcome, Commander"
      subtitle="Enter your identity to stay connected."
      name={name}
      email={email}
      setname={setname}
      setEmail={setEmail}
      onSubmit={onSubmit}
      submitText="Login"
      onLogout={null}
    />
  );
}
