import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      email: "",
      login: "",
    },
  },
  reducers: {
    loginAccount: (state, action) => {
      state.user = action.payload;
    },
    logOutAccount: (state) => {
      state.user = {
        email: "",
        login: "",
      };
    },
  },
});

export const { loginAccount, logOutAccount } = userSlice.actions;
export default userSlice.reducer;
