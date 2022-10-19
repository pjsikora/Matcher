import { RegisterUserData } from './../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { keys } from 'ts-transformer-keys'

const initialState: RegisterUserData = {
  email: '',
  password: '',
  username: '',
  age: null,
  gender: '',
  searchFor: '',
  desc: '',
  city: '',
  hobbies: [],
}

export const registerSlice = createSlice({
  name: 'registerData',
  initialState,
  reducers: {
    addValue: (state, action: any) => {
      const kurwy = keys<RegisterUserData>()

      const index = kurwy.indexOf(action.payload.value)
      const value2 = kurwy[index]
    },
    // addEmail: (state, action: any) => {
    //   state.email = action.payload;
    // },
    // addPassword: (state, action: any) => {
    //   state.password = action.payload;
    // },
    addItem: (state, action: any) => {
      if (action.payload.value in state)
        state[action.payload.value] = action.payload.data
    },
  },
})

export const { addItem } = registerSlice.actions

export default registerSlice.reducer
