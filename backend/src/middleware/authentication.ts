import { Request, Response } from 'express'

export {}

const jwt = require('jsonwebtoken')
const ErrorHandler = require('../tools/errorHandler')
const User = require('../models/userModel')

exports.checkAuthentication = async (
  req: Request & { query: any; user: any },
  res: Response,
  next: Function
) => {
  const accessToken: string = req.query.accessToken

  if (!accessToken)
    return next(new ErrorHandler('You are not authenticated', 403))

  try {
    const decodedId = jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN_KEY)

    console.log(decodedId)
    const user = await User.findById(decodedId.id)

    const {
      password,
      account_status,
      activation_code,
      activation_code_exp,
      __v,
      _id,
      createdAt,
      updatedAt,
      ...others
    } = user._doc

    req.user = others
    next()
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    })
  }
}
