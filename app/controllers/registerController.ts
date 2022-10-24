import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  requestError,
  requestStart,
  requestSuccess,
} from '../redux/registerSlice'

export const registerCall = async (data: any, dispatch: Dispatch) => {
  dispatch(requestStart())
  try {
    const res = await axios.post(
      'http://192.168.0.9:6000/api/auth/register',
      data
    )
    dispatch(requestSuccess())
    return res.data
  } catch (err: any) {
    dispatch(requestError())
    if (err.hasOwnProperty('response')) return err.response.data
    else
      return {
        success: false,
        message: 'Check network connection',
      }
  }
}
export const checkEmailCall = async (email: string, dispatch: Dispatch) => {
  dispatch(requestStart())
  try {
    const res = await axios.post(
      'http://192.168.0.9:6000/api/auth/register/check',
      { email }
    )
    dispatch(requestSuccess())
    if (res.data.message.email) return true
    else false
  } catch (err: any) {
    dispatch(requestError())
    return false
  }
}
