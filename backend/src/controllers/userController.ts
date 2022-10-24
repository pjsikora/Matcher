import { Request, Response } from 'express'
const User = require('../models/userModel')

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
