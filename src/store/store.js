import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { loadUserFromStorage, saveUserToStorage } from "./persistUser";

const savedUser = loadUserFromStorage();

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: savedUser
    ? { user: { user: savedUser, isLoggedIn: true } }
    : undefined,
});

let prev = store.getState().user.user;

store.subscribe(() => {
  const current = store.getState().user.user;
  if (current !== prev) {
    saveUserToStorage(current);
    prev = current;
  }
});
