import axios from 'axios'

export const registerCall = async (data: any) => {
  try {
    console.log(data)
    const res = await axios.post(
      'http://192.168.0.9:6000/api/auth/register',
      data
    )
    console.log('haloi')
    console.log(res)
    return true
  } catch (err: any) {
    console.log(err?.response)
    return false
  }
}
export const checkEmailCall = async (email: string) => {
  try {
    const res = await axios.post(
      'http://192.168.0.9:6000/api/auth/register/check',
      { email }
    )
    if (res.data.message.email) return true
    else false
  } catch (err: any) {
    console.log(err?.response)
    return false
  }
}
