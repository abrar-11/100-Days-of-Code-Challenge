import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
   user: user ? user : null,
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: "",
};

// Register New User
export const registerUser = createAsyncThunk(
   "auth/register",
   async (userData, thunkAPI) => {
      try {
         return await authService.register(userData);
      } catch (err) {
         const message =
            (err.message && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();

         return thunkAPI.rejectWithValue(message);
      }
   }
);

// Login  User
export const loginUser = createAsyncThunk(
   "auth/login",
   async (userData, thunkAPI) => {
      try {
         return await authService.login(userData);
      } catch (err) {
         // console.log("error: ",err);
         const message =
            (err.message && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();

         return thunkAPI.rejectWithValue(message);
      }
   }
);

// LogOut User
export const logOutUser = createAsyncThunk("/auth/logout", async () => {
   await authService.logOut();
});
export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      resetAll: (state) => {
         state.isError = false;
         state.isSuccess = false;
         state.isLoading = false;
         state.message = "";
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.isSuccess = true;
            state.user = action.payload;
         })
         .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            state.message = action.payload;
         })
         .addCase(logOutUser.fulfilled, (state) => {
            state.user = null;
         })
         .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.isSuccess = true;
            state.user = action.payload;
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            state.message = action.payload;
         });
   },
});

// Action creators are generated for each case reducer function
export const { resetAll } = authSlice.actions;

export default authSlice.reducer;
