const User=require('../Models/user.model')
const errorHandler=require('../Utils/error')
const jwt = require('jsonwebtoken')

const signin=async(req,res,next)=>{
    const{email,password}=req.body;
    try {
      const validUser = await  User.findOne({email})
      if(!validUser) return next(errorHandler(404, "User not found"))
  
        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET)
        res.status(200).json({currentUser:validUser,token})
  
    } 
     catch (error) {
      next(error)
    }
  }

  module.exports=signin