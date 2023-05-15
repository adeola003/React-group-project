import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketsList: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: () => {
  },
});

export default rocketsSlice.reducer;
