import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import userReducer from "./user/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
