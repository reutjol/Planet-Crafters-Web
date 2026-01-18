import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,          
  isLoggedIn: false,   
  lastUpdated: null,  
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.lastUpdated = Date.now();
    },
    updateProfile: (state, action) => {
      if (!state.user) return;
      state.user = { ...state.user, ...action.payload };
      state.lastUpdated = Date.now();
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.lastUpdated = Date.now();
    },
  },
});

export const { login, updateProfile, logout } = userSlice.actions;
export default userSlice.reducer;
