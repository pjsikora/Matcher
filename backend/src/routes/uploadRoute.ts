export {}

const { uploadPhotos } = require('../controllers/uploadController')
const { checkAuthentication } = require('../middleware/authentication')

const router = require('express').Router()

router.route('/').post(uploadPhotos)
router.route('/secure').post(checkAuthentication, uploadPhotos)

module.exports = router
