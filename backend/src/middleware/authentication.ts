import { Request, Response } from 'express'

export {}

const jwt = require('jsonwebtoken')
const ErrorHandler = require('../tools/errorHandler')
const User = require('../models/userModel')

exports.checkAuthentication = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const accessToken: string = req.body.accessToken

  if (!accessToken)
    return next(new ErrorHandler('You are not authenticated', 403))

  try {
    const decodedId = jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN_KEY)

    console.log(decodedId)
    req.user = await User.findById(decodedId.id)
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    })
  }

  next()
}
