import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  card: {
    id: 1,
    title: '더미 데이터 입니다',
    body: '더미 데이터 입니다',
    thumbnail: 'dummydata.jpg',
    tags: ['더미1', '더미2'],
  },
};

export const getCardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getCardData: (state, action) => {
      console.log(action.payload);
      state.card = action.payload;
      console.log(state.card);
    },
  },
});

// getCardData Action 을 외부에서 dispatch 할 수 있게 export
export const getCardAction = getCardSlice.actions;
export const getCardReducer = getCardSlice.reducer;
