import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  cardId: 1,
};

export const getCardIdSlice = createSlice({
  name: 'getCardId',
  initialState,
  reducers: {
    getCardId: (state, action) => {
      state.cardId = action.payload;
    },
  },
});

// getCardData Action 을 외부에서 dispatch 할 수 있게 export
export const getCardIdAction = getCardIdSlice.actions;
export const getCardIdReducer = getCardIdSlice.reducer;
