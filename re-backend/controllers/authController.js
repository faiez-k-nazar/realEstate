const User = require('../Models/user.model')
const errorHandler = require('../Utils/error')
const jwt = require('jsonwebtoken')

const signup=async (req,res,next)=>{
  const {username,email,password}=req.body
  const newUser = new User({username,email,password})
  try{
    await newUser.save()
    res.status(201).json("user created")
  }
  catch(err){
next(err)
 }

    
}

const signin=async(req,res,next)=>{
  const{email,password}=req.body;
  try {
    const validUser = await  User.findOne({email})
    if(!validUser) return next(errorHandler(404, "User not found"))
      
      const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET)
    res.cookie('access_token',token,{httpOnly:true}).status(200).json(validUser)
  } 
   catch (error) {
    next(error)
  }
}


module.exports=signup
module.exports=signin