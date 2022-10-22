import { userInfo } from 'os'

const jwt = require('jsonwebtoken')

const generateToken = (id: number, secret: string) => {
  return jwt.sign({ id }, secret)
}

module.exports = generateToken
