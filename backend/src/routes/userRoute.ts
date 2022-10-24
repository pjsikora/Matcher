export {}

const router = require('express').Router()
const { checkAuthentication } = require('../middleware/authentication')
const { getUser } = require('../controllers/userController')

router.route('/').get(checkAuthentication, getUser)

module.exports = router
