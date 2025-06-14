import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  token: localStorage.getItem("userToken") || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = action.payload.userInfo;
      console.log(state.userInfo);

      state.token = action.payload.token;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo));
      localStorage.setItem("userToken", action.payload.token);
    },
    logoutUser: (state) => {
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("cart");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
