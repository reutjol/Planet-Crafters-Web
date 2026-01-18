import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, logout } from "../../store/userSlice";

export default function Connect() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [name, setname] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  useEffect(() => {
    setname(user?.name ?? "");
    setEmail(user?.email ?? "");
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        name: name.trim(),
        email: email.trim(),
      })
    );
  }

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
      onLogout={() => dispatch(logout())

      } />
  );
}
