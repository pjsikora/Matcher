require('dotenv').config({ path: __dirname + '/config/.env' })

export {}

const express = require('express')
const dotenv = require('dotenv')
const AuthRoute = require('./routes/AuthRoute')
const userRoute = require('./routes/userRoute')
const uploadRoute = require('./routes/uploadRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const { checkAuthentication } = require('./middleware/authentication')
const multer = require('multer')
const path = require('path')

const app = express()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads')
  },
  filename: function (req, file, cb) {
    ///cb(null, Date.now() + file.originalname.replace(/\s+/g, '-'))
    cb(null, Date.now() + '')
  },
})

const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
})

app.use(express.json())
app.use('/api/auth', AuthRoute)
app.use('/api/user', userRoute)
app.use('/api/upload-images', upload.array('image'), uploadRoute)
app.use(errorMiddleware)

module.exports = { app, upload }
