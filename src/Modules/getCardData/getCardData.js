import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  Id: {
    id: 1,
  },
};

export const getCardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getCardData: (state, action) => {
      state.Id = action.payload;
    },
  },
});

// getCardData Action 을 외부에서 dispatch 할 수 있게 export
export const getCardAction = getCardSlice.actions;
export const getCardReducer = getCardSlice.reducer;
