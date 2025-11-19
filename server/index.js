import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
connectDB();

const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:8085', 'http://localhost:19006', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test route to verify server is running
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});



app.listen(3000 , ()=>{
    console.log("server Started")
})