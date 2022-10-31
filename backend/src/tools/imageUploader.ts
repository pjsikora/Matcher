const cloudinary = require('cloudinary').v2

exports.cloudinaryImageUploadMethod = async (file: any) => {
  return new Promise(async (resolve) => {
    cloudinary.uploader.upload(file, (err: any, res: any) => {
      if (err) return res.status(500).send('upload image error')
      else
        resolve({
          public_id: res.public_id,
          url: res.secure_url,
        })
    })
  })
}
