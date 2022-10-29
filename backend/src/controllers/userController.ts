import { Request, Response } from 'express'
const User = require('../models/userModel')
const ErrorHandler = require('../tools/errorHandler')

exports.getUser = (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  try {
    res.status(200).json({ success: true, message: req.user })
  } catch (err) {
    res.status(500).json({ success: false, message: err })
  }
}
exports.updateUser = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const { ...values } = req.body

  console.log(values)

  const itemsToEdit = Object.keys(values).map((key) => [key, values[key]])

  try {
    const user = await User.findOne({ email: req.user.email })

    if (!user) {
      return next(new ErrorHandler('User not found', 404))
    }

    itemsToEdit.forEach((item: any) => {
      if (item[0] in user) user[item[0]] = item[1]
    })

    const newUser = await user.save()

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

    res.status(200).json({ success: true, message: others })
  } catch (err) {
    next(new ErrorHandler(err, 500))
  }
}
