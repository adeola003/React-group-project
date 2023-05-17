import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocketsList: [],
  isLoading: true,
};

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets',
  async () => {
    const response = await axios.get(url);
    const rocketsData = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
      reserved: false,
    }));
    return rocketsData;
  });

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket(state, action) {
      const newState = state.rocketsList.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
      return { rocketsList: [...newState] };
    },

    cancelRocket(state, action) {
      const newState = state.rocketsList.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
      return { rocketsList: [...newState] };
    },

  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rocketsList = action.payload;
    },
    [fetchRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default rocketsSlice.reducer;
export const { bookRocket, cancelRocket } = rocketsSlice.actions;
