import { CustomAuthenticationResponse } from 'nodemailer/lib/smtp-connection'
const nodemailer = require('nodemailer')

interface MailDetails {
  from: string
  to: string
  subject: string
  html: string
}
const sendEmail = async (details: MailDetails) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })
  const mailOptions = {
    ...details,
  }
  transporter.sendMail(
    mailOptions,
    (err: Error, info: CustomAuthenticationResponse) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Email sent: ' + info.response)
      }
    }
  )
}

module.exports = sendEmail
