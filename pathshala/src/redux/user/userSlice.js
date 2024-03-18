import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  openSidebar: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: () => {
      return initialState;
    },
    openScreenSidebar: (state, action) => {
      state.openSidebar = action.payload;
    },
  },
});

export const { signInSuccess, logOut, openScreenSidebar } = userSlice.actions;

export default userSlice.reducer;
