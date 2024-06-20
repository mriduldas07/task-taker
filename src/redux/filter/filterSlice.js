import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priority: "All",
  status: "All",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByPriority: (state, action) => {
      state.priority = action.payload;
    },
    filterByStatus: (state, action) => {
      state.status = action.payload;
    },
    filterBySearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterByPriority, filterByStatus, filterBySearch } =
  filterSlice.actions;
