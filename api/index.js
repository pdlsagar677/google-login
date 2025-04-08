import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import AuthRoute from './route/Auth.router.js'
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Add express.json() middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

// Fixed: Added missing forward slash
app.use('/api/auth', AuthRoute);

mongoose.connect(process.env.MONGODB_CONN).then(() => {
    console.log('Database connected successfully')
}).catch(err => console.log('Database connection failed', err))

app.get('/', (req, res) => {
    res.send('welcome to homepage')
})

app.listen(PORT, () => {
    console.log('server is running on port:', PORT)
})