import { RegisterUserData } from './../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: RegisterUserData = {
  email: '',
  password: '',
  name: '',
  age: null,
  gender: '',
  searchFor: '',
  desc: '',
  city: '',
}

export const registerSlice = createSlice({
  name: 'registerData',
  initialState,
  reducers: {
    addEmail: (state, action: any) => {
      state.email = action.payload
    },
    addPassword: (state, action: any) => {
      state.password = action.payload
    },
  },
})

export const { addEmail, addPassword } = registerSlice.actions

export default registerSlice.reducer
