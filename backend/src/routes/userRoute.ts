export {}

const router = require('express').Router()
const { checkAuthentication } = require('../middleware/authentication')
const { getUser, updateUser } = require('../controllers/userController')

router.route('/').get(checkAuthentication, getUser)
router.route('/update').post(checkAuthentication, updateUser)

module.exports = router
