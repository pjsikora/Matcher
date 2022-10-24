import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { requestError, requestStart, requestSuccess } from '../redux/userSlice'

export const getUserCall = async (accessToken: string, dispatch: Dispatch) => {
  dispatch(requestStart())
  try {
    const res = await axios.get('http://192.168.0.9:6000/api/user/', {
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
