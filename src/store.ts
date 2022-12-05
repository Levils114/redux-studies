import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counter-slice";

type GetState = typeof store.getState;
export type RootState = ReturnType<GetState>;

export const store = configureStore({
   reducer: {
      counter: counterReducer,
   }
});