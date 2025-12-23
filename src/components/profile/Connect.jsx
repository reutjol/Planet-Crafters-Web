import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../common/ProfileContext";
import ProfileForm from "./ProfileForm";

export default function Connect() {
  const { user, update, logout } = useContext(ProfileContext);

  const [name, setname] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  useEffect(() => {
    setname(user?.name ?? "");
    setEmail(user?.email ?? "");
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault();
    update({
      name: name.trim(),
      email: email.trim(),
    });
  };

  return (
    <ProfileForm
      title="Connected"
      subtitle="Update your details anytime."
      name={name}
      email={email}
      setname={setname}
      setEmail={setEmail}
      onSubmit={onSubmit}
      submitText="Save"
      onLogout={logout}
    />
  );
}
