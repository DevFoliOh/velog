import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  comment: {},
};

export const currentCommentSlice = createSlice({
  name: 'currentComment',
  initialState,
  reducers: {
    getCurrentComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const currentCommentAction = currentCommentSlice.actions;
export const currentCommentReducer = currentCommentSlice.reducer;
