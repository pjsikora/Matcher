export interface RegisterStateData {
  data: {
    [index: string]: string | number | null | string[]
  }
  pending: boolean
  error: boolean

  //   email: string
  //   password: string
  //   name: string
  //   age: number | null
  //   gender: string
  //   ///enum
  //   searchFor: string ///enum
  //   ///photos
  //   //hobbies
  //   desc: string
  //   city: string
}
