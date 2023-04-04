const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("database connected "))
 app.get('/',(req,res)=>{
 res.send('Hello World')})
app.listen(5000)
