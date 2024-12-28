
require('dotenv').config()

const express = require('express')

const cors = require('cors')

const db = require('./DB/Connection')

const userRouter = require('./Routes/router')

const authrouter = require('./Routes/authRouter')

const signInRouter = require('./Routes/signInRoute')

const googleRouter = require('./Routes/googleRoute')

const reServer = express()

reServer.use(cors())
reServer.use(express.json())
reServer.use('/api/user',userRouter)
reServer.use('/api/auth',authrouter)
reServer.use('/api/auth',signInRouter)
reServer.use('/api/auth',googleRouter)
reServer.use(express.json())

const PORT = 3000 || process.env.PORT

reServer.listen(PORT,()=>{
    console.log("running on: "+PORT);
    
})

reServer.get('/',(req,res)=>{
    res.send("welcome to server")
})

reServer.use((err,req,res,next)=>{
const statusCode=err.statusCode || 500;
const message = err.message || "internal server errorr"
return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  

})
})




