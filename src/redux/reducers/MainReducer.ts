import { combineReducers } from "@reduxjs/toolkit";
import mealReducer from "../slices/MainSlice";

const rootReducer = combineReducers({
  meal: mealReducer,
});

export default rootReducer;
