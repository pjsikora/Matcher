export {}

const router = require('express').Router()
const { checkAuthentication } = require('../middleware/authentication')
const {
  getUser,
  updateUser,
  changeEmail,
  changePassword,
} = require('../controllers/userController')

router.route('/').get(checkAuthentication, getUser)
router.route('/update').post(checkAuthentication, updateUser)
router.route('/update/email').post(checkAuthentication, changeEmail)
router.route('/update/password').post(checkAuthentication, changePassword)

module.exports = router
