const express=require('express')
const router = express.Router()
const signout = require('../controllers/signOutControl')

router.post("/signout",signout)

module.exports=router