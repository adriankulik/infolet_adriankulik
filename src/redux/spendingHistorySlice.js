import { createSlice } from "@reduxjs/toolkit";

export const spendingHistorySlice = createSlice({
  name: "spendingHistory",
  initialState: {
    value: [],
  },
  reducers: {
    spendingHistoryDownload: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { spendingHistoryDownload } = spendingHistorySlice.actions;

export default spendingHistorySlice.reducer;
