import { configureStore } from "@reduxjs/toolkit";
import animalsSlice from "./animals/animalsSlice";
import teamSlice from "./team/teamSlice";
import userSlice from "./user/user";

export const store = configureStore({
  reducer: {
    animals: animalsSlice,
    team: teamSlice,
    user: userSlice,
  },
});
