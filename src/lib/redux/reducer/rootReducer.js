import { combineReducers } from "redux";
import userReducer from "../action/user/user";
import arcticlesReducer from "../action/articles/article";

const Reducer = combineReducers({
  user: userReducer,
  articles: arcticlesReducer,
});

export default Reducer;
