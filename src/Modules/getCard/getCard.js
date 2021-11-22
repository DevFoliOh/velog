import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  card: {
    tags: [],
    body: '',
    thumbnail: '',
    createdAt: '',
    updatedAt: '',
    id: '',
  },
};

export const getCardSlice = createSlice({
  name: 'getCard',
  initialState,
  reducers: {
    getCard: (state, action) => {
      console.log(action.payload);
      state.card = action.payload;
    },
  },
});

// getCardData Action 을 외부에서 dispatch 할 수 있게 export
export const getCardAction = getCardSlice.actions;
export const getCardReducer = getCardSlice.reducer;
