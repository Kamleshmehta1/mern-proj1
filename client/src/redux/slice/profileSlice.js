import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../actions/authAction';

const initialState = { profileInfo: '' };

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.profile.matchFulfilled,
      (state, action) => {
        const data = action?.payload;
        state.profileInfo = data?.data;
      }
    );
  },
});

// export const {} = profileSlice.actions;

export default profileSlice.reducer;
