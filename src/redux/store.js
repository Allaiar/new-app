import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./shoes/shoesSlice";

export const store = configureStore({
  reducer: {
    shoes: shoesSlice,
  },
});
