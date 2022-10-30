import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { requestError, requestStart, requestSuccess } from '../redux/userSlice'
import { API_URL } from '@env'

type LoginData = {
  email: string
  userPassword: string
}
export const loginCall = async (
  data: LoginData,
  navigate: (screen: string) => void,
  dispatch: Dispatch
) => {
  dispatch(requestStart())
  try {
    console.log(API_URL)
    const res = await axios.post(API_URL.toString() + '/auth/login', data)
    dispatch(requestSuccess())
    return res.data
  } catch (err: any) {
    dispatch(requestError())
    let error
    if (err.hasOwnProperty('response')) {
      error = err?.response.data

      if (error.accountStatus === false) {
        try {
          await axios.post(API_URL.toString() + '/auth/activate/resend', {
            email: data.email,
          })
          navigate('tokenInput')
        } catch (err: any) {
          if (err.hasOwnProperty('response')) return err.response.data
          else
            return {
              success: false,
              message: 'Check network connection',
            }
        }
      }
    } else
      error = {
        success: false,
        message: 'Check network connection',
      }

    return error
  }
}

type ActivationData = {
  email: string
  code: string
}
export const activationCall = async (data: ActivationData) => {
  try {
    const res = await axios.post(API_URL.toString() + '/auth/activate', data)

    return res.data
  } catch (err: any) {
    return err.response.data
  }
}
