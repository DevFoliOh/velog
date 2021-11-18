import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  cardId: 1,
};

export const getCardSlice = createSlice({
  name: 'cardId',
  initialState,
  reducers: {
    getCardData: (state, action) => {
      state.cardId = action.payload;
    },
  },
});

// getCardData Action 을 외부에서 dispatch 할 수 있게 export
export const getCardAction = getCardSlice.actions;
export const getCardReducer = getCardSlice.reducer;
