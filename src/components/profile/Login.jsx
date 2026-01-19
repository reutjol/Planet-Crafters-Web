import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import ProfileForm from "./ProfileForm";

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    dispatch(
      login({
        name: name.trim(),
        email: email.trim(),
      })
    );
  };

  return (
    <ProfileForm
      title="Welcome, Commander"
      subtitle="Enter your identity to stay connected."
      name={name}
      email={email}
      setName={setName}
      setEmail={setEmail}
      onSubmit={onSubmit}
      submitText="Login"
      onLogout={null}
    />
  );
}
