require('dotenv').config({ path: __dirname + '/config/.env' })

export {}

const express = require('express')
const dotenv = require('dotenv')
const AuthRoute = require('./routes/AuthRoute')
const userRoute = require('./routes/userRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')
const fs = require('fs')
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
    cb(null, Date.now() + file.originalname.replace(/\s+/g, '-'))
  },
})

const upload = multer({ storage: storage })

const cloudinaryImageUploadMethod = async (file) => {
  return new Promise(async (resolve) => {
    cloudinary.uploader.upload(file, (err, res) => {
      if (err) return res.status(500).send('upload image error')
      else
        resolve({
          id: res.public_id,
          res: res.secure_url,
        })
    })
  })
}
app.use('/upload-images', upload.array('image'), async (req, res) => {
  const urls = []
  const files = req.files

  for (const file of files) {
    const { path } = file
    const newPath = await cloudinaryImageUploadMethod(path)
    urls.push(newPath)
    fs.unlinkSync(path)
  }

  res.status(200).json(urls)
})
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     public_id: (req, file) => file.originalname,
//     folder: (req) => req.body.folder,
//   },
// })

app.use(express.json())
app.use('/api/auth', AuthRoute)
app.use('/api/user', userRoute)
app.use(errorMiddleware)

module.exports = { app }
