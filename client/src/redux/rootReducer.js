import { combineReducers } from '@reduxjs/toolkit';
import { api } from './apiInterceptor';
import authContextSlice from '../redux/slice/authSlice';
import profileSlice from './slice/profileSlice';

const combineReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  authContext: authContextSlice,
  profile: profileSlice,
});

const rootReducer = (state, action) => {
  return combineReducer(state, action);
};

export { rootReducer };
