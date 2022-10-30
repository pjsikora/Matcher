import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  requestError,
  requestStart,
  requestSuccess,
  updateUser,
} from '../redux/userSlice'

export const getUserCall = async (accessToken: string, dispatch: Dispatch) => {
  dispatch(requestStart())
  try {
    const res = await axios.get('http://192.168.1.132:6000/api/user/', {
      params: {
        accessToken,
      },
    })
    setTimeout(() => {
      dispatch(requestSuccess())
    }, 2000)

    return res.data
  } catch (err) {
    dispatch(requestError())
    console.log(err)
  }
}
export const updateUserCall = async (
  accessToken: string,
  values: any,
  dispatch: Dispatch
) => {
  dispatch(requestStart())
  try {
    const res = await axios.post(
      'http://192.168.1.132:6000/api/user/update',
      { ...values },
      { params: { accessToken } }
    )
    dispatch(updateUser(res.data.message))
    dispatch(requestSuccess())
    return res.data
  } catch (err: any) {
    dispatch(requestError())

    if (err.hasOwnProperty('response')) return err.response.data
    else return { sucess: false, message: err }
  }
}
export const sendCodeCall = async (email: string, dispatch: Dispatch) => {
  dispatch(requestStart())

  try {
    const res = await axios.post(
      'http://192.168.1.132:6000/api/auth/activate/resend',
      {
        email,
      }
    )
    dispatch(requestSuccess())
    return res.data
  } catch (err: any) {
    if (err.hasOwnProperty('response')) return err.response.data
    else return { sucess: false, message: err }
    dispatch(requestError())
  }
}
export const changeEmailCall = async (
  accessToken: string,
  newEmail: string,
  code: string,
  dispatch: Dispatch
) => {
  dispatch(requestStart())

  console.log(accessToken)
  console.log(newEmail)
  console.log(code)
  try {
    const res = await axios.post(
      'http://192.168.1.132:6000/api/user/update/email',
      { newEmail, code },
      { params: { accessToken } }
    )

    dispatch(updateUser(res.data.message))
    dispatch(requestSuccess())

    return res.data
  } catch (err: any) {
    dispatch(requestError())
    if (err.hasOwnProperty('response')) return err.response.data
    else return { sucess: false, message: err }
  }
}
export const checkPasswordCall = async (
  accessToken: string,
  currentPassword: string,
  dispatch: Dispatch
) => {
  dispatch(requestStart())
  try {
    const res = await axios.post(
      'http://192.168.1.132:6000/api/auth/password/check',
      { currentPassword },
      { params: { accessToken } }
    )
    dispatch(requestSuccess())
    return res.data
  } catch (err: any) {
    dispatch(requestError())
    if (err.hasOwnProperty('response')) return err.response.data
    else return { sucess: false, message: err }
  }
}
export const changePasswordCall = async (
  accessToken: string,
  currentPassword: string,
  newPassword: string,
  dispatch: Dispatch
) => {
  dispatch(requestStart())
  try {
    const res = await axios.post(
      'http://192.168.1.132:6000/api/user/update/password',
      { currentPassword, newPassword },
      { params: { accessToken } }
    )
    dispatch(requestSuccess())
    return res.data
  } catch (err: any) {
    dispatch(requestError())
    if (err.hasOwnProperty('response')) return err.response.data
    else return { sucess: false, message: err }
  }
}
