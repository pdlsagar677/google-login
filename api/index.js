import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import AuthRoute from './route/Auth.router.js';
import AdminRoute from './route/Admin-router.js';
import connectDB from './lib/db.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// Routes
app.use('/api/auth', AuthRoute);
app.use('/api/admin', AdminRoute);

app.get('/', (req, res) => {
    res.send('Welcome to homepage');
});

// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to database:', err);
});
