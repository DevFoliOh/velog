import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  body: '',
};

export const getBodySlice = createSlice({
  name: 'getBody',
  initialState,
  reducers: {
    getBody: (state, action) => {
      state.body = action.payload;
    },
  },
});

export const getBodyAction = getBodySlice.actions;
export const getBodyReducer = getBodySlice.reducer;
