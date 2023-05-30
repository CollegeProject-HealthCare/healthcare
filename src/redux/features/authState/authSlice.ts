import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { validateOtpAPI } from '../../../Services/auth';

type authInitialStateType = {
  userToken: null | string;
  loading: boolean;
  userProfile: any; //need to be changed as per the user data
  error: string;
};

interface otpVerification {
  mobileNumber: string;
  otp: string;
}

const initialState: authInitialStateType = {
  userToken: null,
  loading: false,
  userProfile: null,
  error: '',
};

//Generate pending fulfilled and rejected action type
export const validateOtp = createAsyncThunk('user/fetchUser', async (args: otpVerification) => {
  const { mobileNumber, otp } = args;
  return await validateOtpAPI(mobileNumber, otp);
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(validateOtp.pending, state => {
      state.loading = true;
    }),
      builder.addCase(validateOtp.fulfilled, (state, action: PayloadAction<any>) => {
        (state.loading = false),
          (state.userToken = action.payload.user.token),
          (state.userProfile = action.payload.user.user),
          (state.error = '');
      }),
      builder.addCase(validateOtp.rejected, (state, action) => {
        (state.loading = false),
          (state.userToken = null),
          (state.userProfile = null),
          (state.error = action.error.message || 'something went wrong');
      });
  },
});

export default authSlice.reducer;
