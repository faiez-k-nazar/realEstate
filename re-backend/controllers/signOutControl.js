const signout = async(req,res,next)=>{
        try{
res.clearCookie('access_token')
res.status(200).json('user has logged out')
        }catch(error){
            next(error)
        }
}

module.exports=signout