import { Request, Response } from 'express'
const User = require('../models/userModel')
const ErrorHandler = require('../tools/errorHandler')
const { upload } = require('../app')

exports.uploadPhoto = async (req: Request, res: Response, next: Function) => {
  upload.single('image')
}
