import React, { createContext, useState } from "react";

export const ProfileContext = createContext({
  user: null,
  login: (_user) => {},
  update: (_partial) => {},
  logout: () => {},
});

export function ProfileProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (newUser) => setUser(newUser);

  const update = (partial) =>
    setUser((prev) => (prev ? { ...prev, ...partial } : prev));

  const logout = () => setUser(null);

  return (
    <ProfileContext.Provider value={{ user, login, update, logout }}>
      {children}
    </ProfileContext.Provider>
  );
}
