import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;