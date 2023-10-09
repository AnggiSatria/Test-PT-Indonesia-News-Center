"use client";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import { store } from "../lib/redux/store/store";

const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
