import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_CONN).then(()=>{
    console.log('Database connected successfully')
}).catch(err => console.log('Database connection failed', err))


app.get('/',(req,res)=>{
    res.send('welcome to homepage')
})

app.listen(PORT, ()=>{
    console.log('server is running on port:', PORT)
})