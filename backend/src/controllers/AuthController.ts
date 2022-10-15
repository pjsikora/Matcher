import { Request, Response } from 'express'

const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const randomstring = require('randomstring')
const moment = require('moment')

exports.registerController = async (req: Request, res: Response) => {
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
              activation_code: activation_code, ///Do zmiany
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

          res
            .status(200)
            .json({ success: true, activation_code, message: 'Code sended' })
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
