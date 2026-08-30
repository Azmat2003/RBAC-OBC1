import express from 'express';
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
const app = express();

connectDB();

// glocal middlewares
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);



export default app;