import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {themeReducer} from "./features/theme";
import {useDispatch} from "react-redux";
import {orderMapReducer} from "./features/ordersMap";
import createSagaMiddleware from "redux-saga";
import {CurriedGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import saga from "saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
export const store = configureStore({
  reducer: {
    order: orderMapReducer,
    theme: themeReducer,
  },
  middleware,
  devTools: true,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
