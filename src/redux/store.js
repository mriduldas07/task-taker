import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import filterReducer from "./filter/filterSlice";

const rootReducers = combineReducers({
  filter: filterReducer,
  [api.reducerPath]: api.reducer,
});
export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefauultMiddleware) =>
    getDefauultMiddleware().concat(api.middleware),
});
