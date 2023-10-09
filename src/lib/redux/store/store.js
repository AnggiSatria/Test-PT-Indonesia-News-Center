import { legacy_createStore as createStore, applyMiddleware } from "redux";
import Reducer from "../reducer/rootReducer";
import thunk from "redux-thunk";

export const store = createStore(Reducer, applyMiddleware(thunk));

// export default store;
