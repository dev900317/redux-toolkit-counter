import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// Builder notation
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const increment = createAction('counter/increment');
// export const decrement = createAction('counter/decrement');
// export const incrementByAmount = createAction('counter/incrementByAmount');

// export const initialState = {
//   value: 0,
// };

// export const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.value++;
//     })
//     .addCase(decrement, (state, action) => {
//       state.value--;
//     })
//     .addCase(incrementByAmount, (state, action) => {
//       state.value += action.payload;
//     });
// });
