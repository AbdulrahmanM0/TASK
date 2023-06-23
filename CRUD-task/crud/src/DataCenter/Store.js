import { configureStore } from '@reduxjs/toolkit';
import reportsReducer from './DataCenter';

const store = configureStore({
  reducer: {
    reports: reportsReducer,
  },
});

export default store;