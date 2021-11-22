import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  thumbnail: '',
};

export const getImageSlice = createSlice({
  name: 'getImgae',
  initialState,
  reducers: {
    getImage: (state, action) => {
      state.thumbnail = action.payload;
      console.log(action.payload);
    },
  },
});

export const getImageAction = getImageSlice.actions;
export const getImageReducer = getImageSlice.reducer;
