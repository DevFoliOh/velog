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

// getCardData Action 을 외부에서 dispatch 할 수 있게 export
export const currentCommentAction = currentCommentSlice.actions;
export const currentCommentReducer = currentCommentSlice.reducer;
