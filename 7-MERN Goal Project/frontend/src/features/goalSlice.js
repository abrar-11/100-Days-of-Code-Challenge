import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
   goals: [],
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: "",
};

// Create new goal
export const addGoal = createAsyncThunk("goal/add", async (goal, thunkAPI) => {
   try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.addGoal(goal, token);
   } catch (err) {
      const message =
         (err.message && err.response.data && err.response.data.message) ||
         err.message ||
         err.toString();

      return thunkAPI.rejectWithValue(message);
   }
});
// Get All user goals
export const getAllGoals = createAsyncThunk(
   "goal/getAllGoals",
   async (_, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token;
         return await goalService.getAllGoals(token);
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         return thunkAPI.rejectWithValue(message);
      }
   }
);


// Get All user goals
export const deleteGoal = createAsyncThunk(
   "goal/deleteGoal",
   async (_id, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token;
         return await goalService.deleteGoal(_id,token);
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         return thunkAPI.rejectWithValue(message);
      }
   }
);


export const goalSlice = createSlice({
   name: "goal",
   initialState,
   reducers: {
      resetAll: (state) => state =  initialState,
   },
   extraReducers: (builder) => {
      builder
         .addCase(addGoal.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(addGoal.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.isSuccess = true;
            state.goals.push(action.payload);
         })
         .addCase(addGoal.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
         })
         .addCase(getAllGoals.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getAllGoals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = action.payload;
         })
         .addCase(getAllGoals.rejected, (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
            state.isError = true;
         })
         .addCase(deleteGoal.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(deleteGoal.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = state.goals.filter(goal=>goal._id!==action.payload.id);
         })
         .addCase(deleteGoal.rejected, (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
            state.isError = true;
         });

      //
   },
});

// Action creators are generated for each case reducer function
export const { resetAll } = goalSlice.actions;

export default goalSlice.reducer;
