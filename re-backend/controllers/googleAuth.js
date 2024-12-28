const User = require('../Models/user.model')
const jwt = require('jsonwebtoken')

const google = async (req,res,next)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password: pass,...rest} = user._doc;
            res
            .cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json(rest)
        }else{
                const generatePass=Math.random().toString(36).slice(-8)
                const newUser = new User({username:req.body.name.split(" ").join("").toLowerCase()+ Math.random().toString(36).slice(-4), email:req.body.email,password:generatePass,avatar:req.body.photo
                    
                })
                await newUser.save()
                const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
                const {password: pass,...rest} = newUser._doc;  
                res
            .cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json(rest)
        }
    } catch (error) {
        next(error)
    }
}

module.exports=google