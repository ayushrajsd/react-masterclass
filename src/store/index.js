import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import thunk from "redux-thunk";

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
