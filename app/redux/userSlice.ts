import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    username: '',
    age: null,
    gender: '',
    searchFor: '',
    desc: '',
    city: '',
    hobbies: [],
  },
  accessToken: '',
  refreshToken: '',
  pending: false,
  error: false,
}

export const userSlice = createSlice({
  name: 'userSlice',
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
    saveUserData: (state, action) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
  },
})
export const { saveUserData, requestError, requestStart, requestSuccess } =
  userSlice.actions

export default userSlice.reducer
