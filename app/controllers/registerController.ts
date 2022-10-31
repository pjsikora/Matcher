import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  requestError,
  requestStart,
  requestSuccess,
} from '../redux/registerSlice'
import { API_URL } from '@env'
import { Platform } from 'react-native'

export const registerCall = async (data: any, dispatch: Dispatch) => {
  dispatch(requestStart())
  try {
    const res = await axios.post(API_URL.toString() + '/auth/register', data)
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
    const res = await axios.post(API_URL.toString() + '/auth/register/check', {
      email,
    })
    dispatch(requestSuccess())
    if (res.data.message.email) return true
    else false
  } catch (err: any) {
    dispatch(requestError())
    return false
  }
}
export const uploadPhotosCall = async (photos: any, dispatch: Dispatch) => {
  dispatch(requestStart())

  const formData = new FormData()
  photos.forEach((photo: any) => {
    formData.append('image', {
      name: 'ty',
      type: photo.type,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    })
    console.log(formData)
  })

  try {
    const res = await axios.post(
      API_URL.toString() + '/upload-images/',
      formData
    )
    dispatch(requestSuccess())
    return res.data
  } catch (err: any) {
    console.log(err)
    dispatch(requestError())
    if (err.hasOwnProperty('response')) return err.response.data
    else
      return {
        success: false,
        message: 'Check network connection',
      }
  }
}
