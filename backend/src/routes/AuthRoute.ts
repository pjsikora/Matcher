const router = require('express').Router()
const { registerController } = require('../controllers/AuthController')

router.route('/register').post(registerController)

module.exports = router
