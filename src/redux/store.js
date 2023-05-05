import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import pointReducer from "./pointSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    point: pointReducer,
  },
});
