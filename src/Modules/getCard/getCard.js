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
      state.card = action.payload;
    },
  },
});

export const getCardAction = getCardSlice.actions;
export const getCardReducer = getCardSlice.reducer;
