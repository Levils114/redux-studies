import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterStateProps{
   value: number;
}

const initialState: CounterStateProps = {
   value: 0,
}

export const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      increment: (state: CounterStateProps) => {
         state.value += 1;
      },
      incrementAmount: (state: CounterStateProps, action: PayloadAction<number>) => {
         state.value += action.payload;
      },
   }
});

export const { increment, incrementAmount, } = counterSlice.actions;
export const counterReducer =  counterSlice.reducer;