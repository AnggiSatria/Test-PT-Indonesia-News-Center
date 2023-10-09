import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  token: "",
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    CHECK_AUTH: (state, action) => {
      return {
        ...state,
        isLogin: true,
        token: sessionStorage.token || localStorage.token,
        user: action.payload,
      };
    },
    LOGOUT: (state) => {
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        token: "",
        user: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { CHECK_AUTH, LOGOUT } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
