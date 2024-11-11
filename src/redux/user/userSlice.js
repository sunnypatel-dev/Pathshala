import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  openSidebar: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    signInFailure: (state) => {
      state.loading = false;
    },
    logOut: () => {
      return initialState;
    },
    loadingState: (state, action) => {
      state.loading = action.payload;
    },
    openScreenSidebar: (state, action) => {
      state.openSidebar = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  logOut,
  loadingState,
  openScreenSidebar,
} = userSlice.actions;

export default userSlice.reducer;
