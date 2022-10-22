const router = require('express').Router()
const {
  registerController,
  activateAccount,
  resendActivationCode,
  checkEmail,
  loginController,
} = require('../controllers/authController')

router.route('/register').post(registerController)
router.route('/register/check').post(checkEmail)
router.route('/activate').post(activateAccount)
router.route('/activate/resend').post(resendActivationCode)

router.route('/login').post(loginController)

module.exports = router
