const { cloudinaryImageUploadMethod } = require('../tools/imageUploader')
const fs = require('fs')

exports.uploadPhotos = async (req: Request & { files: any }, res: any) => {
  console.log('wtiam')
  const urls = []
  const files = req.files

  console.log(files)

  for (const file of files) {
    const { path } = file
    const newPath = await cloudinaryImageUploadMethod(path)
    urls.push(newPath)
    console.log(path)
    fs.unlinkSync(path)
  }

  res.status(200).json({ success: true, message: urls })
}
