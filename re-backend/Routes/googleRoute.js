const express=require('express')
const router = express.Router()
const google = require('../controllers/googleAuth')

router.post("/google",google)

module.exports=router