const router = require('express').Router()
const {
  registerController,
  activateAccount,
  resendActivationCode,
  checkEmail,
  loginController,
  checkPassword,
  uploadPhotos,
} = require('../controllers/authController')
const { checkAuthentication } = require('../middleware/authentication')
const { upload } = require('../app')

router.route('/register').post(registerController)
router.route('/register/check').post(checkEmail)
router.route('/activate').post(activateAccount)
router.route('/activate/resend').post(resendActivationCode)

router.route('/login').post(loginController)

router.route('/password/check').post(checkAuthentication, checkPassword)

module.exports = router
