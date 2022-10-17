import { RegisterUserData } from "./../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { keys } from "ts-transformer-keys";

const initialState: RegisterUserData = {
  email: "",
  password: "",
  name: "",
  age: null,
  gender: "",
  searchFor: "",
  desc: "",
  city: "",
};

export const registerSlice = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    addValue: (state, action: any) => {
      const kurwy = keys<RegisterUserData>();

      const index = kurwy.indexOf(action.payload.value);
      const value2 = kurwy[index];
    },
    addEmail: (state, action: any) => {
      state.email = action.payload;
    },
    addPassword: (state, action: any) => {
      state.password = action.payload;
    },
  },
});

export const { addEmail, addPassword } = registerSlice.actions;

export default registerSlice.reducer;
