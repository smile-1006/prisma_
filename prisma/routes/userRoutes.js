const express = require('express')
const router = express.Router()

//bring in controllers
const {signup,login,logout} = require('../controller/userController')
router.route('/signup').post(signup)

module.exports = router