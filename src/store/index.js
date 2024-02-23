import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import userReducer from "./user/slice";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas";

const sagaMiddleware =
createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware : getDefaultMiddleware=>
  [
      ...getDefaultMiddleware(),
      sagaMiddleware
    ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
