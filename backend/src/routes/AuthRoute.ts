const router = require('express').Router()
const {
  registerController,
  activateAccount,
  resendActivationCode,
} = require('../controllers/authController')

router.route('/register').post(registerController)
router.route('/activate').post(activateAccount)
router.route('/activate/resend').post(resendActivationCode)

module.exports = router
