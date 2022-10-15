const router = require('express').Router()
const {
  registerController,
  activateAccount,
} = require('../controllers/authController')

router.route('/register').post(registerController)
router.route('/activate').post(activateAccount)

module.exports = router
