const express = require('express')
const router = express.Router()
const {getUsers} = require('../controllers/UserController')


router.get('/', getUsers)