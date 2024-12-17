
require('dotenv').config()

const express = require('express')

const cors = require('cors')

const db = require('./DB/Connection')

const userRouter = require('./Routes/router')

const reServer = express()

reServer.use(cors())
reServer.use(express.json())
reServer.use(userRouter)

const PORT = 3000 || process.env.PORT

reServer.listen(PORT,()=>{
    console.log("running on: "+PORT);
    
})

reServer.get('/',(req,res)=>{
    res.send("welcome to server")
})



