import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missionsList: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: () => {
  },
});

export default missionsSlice.reducer;
