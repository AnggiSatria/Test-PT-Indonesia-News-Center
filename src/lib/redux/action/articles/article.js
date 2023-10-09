import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    // CHECK_AUTH: (state, action) => {
    //   return {
    //     ...state,
    //     isLogin: true,
    //     token: sessionStorage.token || localStorage.token,
    //     user: action.payload,
    //   };
    // },
    // LOGOUT: (state) => {
    //   sessionStorage.removeItem("token");
    //   localStorage.removeItem("token");
    //   return {
    //     ...state,
    //     isLogin: false,
    //     token: "",
    //     user: "",
    //   };
    // },
    ARTICLES: (state, action) => {
      return {
        ...state,
        articles: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { ARTICLES } = articlesSlice.actions;

export const selectArticles = (state) => state.articles;

export default articlesSlice.reducer;
