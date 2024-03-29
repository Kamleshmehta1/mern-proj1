import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuthenticated: false, isAdmin: false };

const authContextSlice = createSlice({
  name: 'authContext',
  initialState,
  reducers: {
    initialize: (state, action) => {
      const { isAuthenticated, isAdmin } = action.payload;
      state.isAuthenticated = isAuthenticated || false;
      state.isAdmin = isAdmin || false;
    },
  },
});

export const { initialize } = authContextSlice.actions;

export default authContextSlice.reducer;
