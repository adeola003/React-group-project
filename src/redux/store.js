import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rocketsSlice';
import missionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
