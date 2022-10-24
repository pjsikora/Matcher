import registerReducer from './registerSlice'
import userReducer from './userSlice'
import { configureStore } from '@reduxjs/toolkit'
import * as SecureStore from 'expo-secure-store'

async function save(key: string, value: any) {
  await SecureStore.setItemAsync(key, value)
}

export const store = configureStore({
  reducer: {
    registerData: registerReducer,
    userData: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

store.subscribe(() => {
  save('userData', JSON.stringify(store.getState().userData))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
