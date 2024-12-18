const User = require('../Models/user.model')

const signup=async (req,res,next)=>{
  const {username,email,password}=req.body
  const newUser = new User({username,email,password})
  try{
    await newUser.save()
    res.status(201).json("user created")
  }
  catch(err){
next(err)  }

    
}
module.exports=signup