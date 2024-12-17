//1 mongoose
const mongoose = require('mongoose')

//2 get connectionString
const connectionString = process.env.connectionString

//3 define connection
mongoose.connect(connectionString).then(res=>{
console.log("reServer connected");

}).catch(err=>{
    console.log("error",err);
    
})