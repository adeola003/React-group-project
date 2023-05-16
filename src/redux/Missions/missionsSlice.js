import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  if (response.status !== 200) return [];
  const data = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => {
      state.missions = action.payload;
    },
  },
});

export default missionsSlice.reducer;
