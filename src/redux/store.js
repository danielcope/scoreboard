import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import randomDataSlice from "./randomDataSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    getData: randomDataSlice,
  },
});
