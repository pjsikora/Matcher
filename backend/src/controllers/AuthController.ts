import { getActivationMessage } from './../templates/activationMessage'
import { Request, Response } from 'express'

const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const randomstring = require('randomstring')
const moment = require('moment')
const sendEmail = require('../tools/mailSender')
const jwtGenerator = require('../tools/jwtGenerator')

exports.loginController = async (req: Request, res: Response) => {
  const { email, userPassword } = req.body

  try {
    const user = await User.findOne({ email }).select('+password')

    if (!user)
      return res.status(404).json({
        success: false,
        message: 'User not found',
      })
    else {
      console.log(user)
      const isCorrect = await bcrypt.compare(userPassword, user.password)

      if (!isCorrect) {
        return res
          .status(400)
          .json({ success: false, message: 'Invalid password' })
      }

      if (user.account_status === false) {
        return res.status(400).json({
          success: false,
          accountStatus: user.account_status,
        })
      }
      const accessToken = jwtGenerator(
        user._id,
        process.env.JWT_ACCESS_TOKEN_KEY
      )
      const refreshToken = jwtGenerator(
        user._id,
        process.env.JWT_REFRESH_TOKEN_KEY
      )

      const {
        password,
        account_status,
        activation_code,
        activation_code_exp,
        ...others
      } = user._doc

      res.status(200).json({
        success: true,
        data: {
          accessToken,
          refreshToken,
          user: others,
        },
      })
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    })
  }
}
exports.registerController = async (req: Request, res: Response) => {
  console.log(req.body)
  const { username, email, password, age, city, gender, searchFor, desc } =
    req.body

  bcrypt.hash(
    password,
    Number(process.env.SALT_ROUNDS),
    async function (err: Error, hash: String) {
      const activation_code = randomstring.generate(8)

      bcrypt.hash(
        activation_code,
        Number(process.env.SALT_ROUNDS),
        async (err: Error, hashedCode: String) => {
          const user = new User({
            ...req.body,
            activation_code: hashedCode,
            activation_code_exp: moment(new Date().getTime()).add(
              30,
              'minutes'
            ),
            password: hash,
          })
          try {
            const result = await user.save()

            res.status(200).json({
              success: true,
              message: 'Register successfully!',
            })
          } catch (err) {
            res.status(500).json({
              ///tutaj bedzie error hanbdl;er
              success: false,
              message: err,
            })
          }
        }
      )
    }
  )
}
exports.checkEmail = async (req: Request, res: Response) => {
  const { email } = req.body

  try {
    const result = await User.findOne({ email })

    console.log(result)

    res.status(200).json({
      success: true,
      message: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    })
  }
}
exports.activateAccount = async (req: Request, res: Response) => {
  const { email, code } = req.body

  try {
    const user = await User.findOne({ email })
    if (user) {
      if (user.account_status === true) {
        return res.status(500).json({
          success: true,
          message: 'Account is already active!',
        })
      } else {
        const match = await bcrypt.compare(code, user.activation_code)

        if (match && new Date() < user.activation_code_exp) {
          user.account_status = true
          user.activation_code = null
          user.activation_code_exp = null
          await user.save()

          return res
            .status(200)
            .json({ success: true, message: 'Account activaed' })
        } else {
          return res.status(500).json({
            success: false,
            message: 'Activation code is invalid or expired',
          })
        }
      }
    } else {
      return res.status(404).json({ success: false, message: 'User not found' })
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err })
  }
}
exports.resendActivationCode = async (req: Request, res: Response) => {
  const { email } = req.body

  console.log('dfdf')

  try {
    const user = await User.findOne({ email })

    if (user) {
      const activation_code = randomstring.generate(8)
      bcrypt.hash(
        activation_code,
        Number(process.env.SALT_ROUNDS),
        async (err: Error, hash: String) => {
          user.activation_code = hash
          user.activation_code_exp = moment(new Date().getTime()).add(
            30,
            'minutes'
          )
          await user.save()

          const emailMessage = getActivationMessage(activation_code)
          await sendEmail({
            from: process.env.MAIL_USERNAME,
            to: email,
            subject: 'Matcher - activate your account',
            html: emailMessage,
          })
          res.status(200).json({ success: true, message: 'Code sended' })
        }
      )
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
      })
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err,
    })
  }
}
