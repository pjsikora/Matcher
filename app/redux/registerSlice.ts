import { RegisterStateData } from './../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { keys } from 'ts-transformer-keys'

const initialState: RegisterStateData = {
  data: {
    email: '',
    password: '',
    username: '',
    age: null,
    gender: '',
    searchFor: '',
    desc: '',
    city: '',
    hobbies: [],
    photos: [],
    images: [],
  },
  pending: false,
  error: false,
}

export const registerSlice = createSlice({
  name: 'registerData',
  initialState,
  reducers: {
    requestStart: (state) => {
      state.pending = true
      state.error = false
    },
    requestSuccess: (state) => {
      state.pending = false
      state.error = false
    },
    requestError: (state) => {
      state.pending = false
      state.error = true
    },
    addItem: (state, action: any) => {
      if (action.payload.value in state.data)
        state.data[action.payload.value] = action.payload.data
    },
  },
})

export const { addItem, requestError, requestStart, requestSuccess } =
  registerSlice.actions

export default registerSlice.reducer
