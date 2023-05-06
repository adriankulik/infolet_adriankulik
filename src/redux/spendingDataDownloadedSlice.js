import { createSlice } from "@reduxjs/toolkit";

export const spendingDataDownloadedSlice = createSlice({
  name: "spendingDataDownloaded",
  initialState: {
    value: false,
  },
  reducers: {
    spendingLoaded: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { spendingLoaded } = spendingDataDownloadedSlice.actions;

export default spendingDataDownloadedSlice.reducer;
