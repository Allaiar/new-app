import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teamServices from "../services/teamServices";

export const getTeam = createAsyncThunk("GET_TEAM", async (_, thunkApi) => {
  try {
    return teamServices.getTeam();
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    team: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getTeam.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.team = action.payload;
    });
    builder.addCase(getTeam.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.team = null;
    });
  },
});

export default teamSlice.reducer;
