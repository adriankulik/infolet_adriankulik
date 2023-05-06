import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import pointReducer from "./pointSlice";
import spendingHistoryReducer from "./spendingHistorySlice";
import spendingDataDownloadedReducer from "./spendingDataDownloadedSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    point: pointReducer,
    history: spendingHistoryReducer,
    downloaded: spendingDataDownloadedReducer,
  },
});
