require('dotenv').config()

const express = require('express')

const cors = require('cors')

const db = require('./DB/Connection')

const reServer = express()

reServer.use(cors())
reServer.use(express.json())

const PORT = 3000 || process.env.PORT

reServer.listen(PORT,()=>{
    console.log("running on: "+PORT);
    
})

reServer.get('/',(req,res)=>{
    res.send("welcome to server")
})