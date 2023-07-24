import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animalsService from "../services/animalsServices";

export const getAnimals = createAsyncThunk(
  "GET_ANIMALS",
  async (_, thunkApi) => {
    try {
      return animalsService.getAnimals();
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const createAnimals = createAsyncThunk(
  "CREATE_ANIMALS",
  async (animalsData, thunkApi) => {
    try {
      return animalsService.createAnimals(animalsData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteAnimal = createAsyncThunk(
  "deleteAnimal",
  async (animalsData, thunkApi) => {
    try {
      return animalsService.deleteAnimal(animalsData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const editAnimal = createAsyncThunk(
  "editAnimal",
  async (animalsData, thunkApi) => {
    try {
      return animalsService.editAnimal(animalsData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const animalsSlice = createSlice({
  name: "animals",
  initialState: {
    animals: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getAnimals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAnimals.fulfilled, (state, action) => {
      state.isLoading = false;
      state.animals = action.payload;
    });
    builder.addCase(getAnimals.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.animals = null;
    });
    builder.addCase(deleteAnimal.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(deleteAnimal.fulfilled, (state, action) => {
      state.isLoading = false;
      state.animals = state.animals.filter(
        (animal) => animal.id !== action.payload
      );
    });
    builder.addCase(deleteAnimal.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(createAnimals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createAnimals.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(createAnimals.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.animals = null;
    });
    builder.addCase(editAnimal.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(editAnimal.fulfilled, (state, action) => {
      state.isLoading = false;
      const updatedAnimal = action.payload;
      const updatedAnimals = state.animals.map((animal) => {
        if (animal.id === updatedAnimal.id) {
          return { ...animal, ...updatedAnimal };
        }
        return animal;
      });
      state.animals = updatedAnimals;
    });
    builder.addCase(editAnimal.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default animalsSlice.reducer;
