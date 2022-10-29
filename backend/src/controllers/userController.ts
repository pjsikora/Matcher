import { Request, Response } from 'express'
const User = require('../models/userModel')
const ErrorHandler = require('../tools/errorHandler')
const bcrypt = require('bcrypt')

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
exports.changeEmail = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const { newEmail, code } = req.body

  try {
    const user = await User.findOne({ email: req.user.email })

    if (!user) {
      return next(new ErrorHandler('User not found', 404))
    }
    const match = await bcrypt.compare(code, user.activation_code)

    if (match && new Date() < user.activation_code_exp) {
      user.activation_code = null
      user.activation_code_exp = null

      user.email = newEmail

      console.log(user)
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
      } = newUser._doc

      return res.status(200).json({ success: true, message: others })
    } else {
      return next(
        new ErrorHandler('Activation code is invalid or expired', 400)
      )
    }
  } catch (err) {
    next(new ErrorHandler(err, 500))
  }
}
exports.changePassword = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const { currentPassword, newPassword } = req.body
  try {
    const user = await User.findOne({ email: req.user.email }).select(
      '+password'
    )

    if (!user) return next(new ErrorHandler('User not found', 404))

    const isCorrect = await bcrypt.compare(currentPassword, user.password)

    console.log(isCorrect)

    if (!isCorrect) {
      return next(new ErrorHandler('Invalid password', 400))
    }

    bcrypt.hash(
      newPassword,
      Number(process.env.SALT_ROUNDS),
      async function (err: Error, hash: String) {
        user.password = hash

        await user.save()

        res.status(200).json({
          success: true,
          message: 'Password changed successfully',
        })
      }
    )
  } catch (err) {
    next(new ErrorHandler(err, 500))
  }
}
