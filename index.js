import express from 'express';
import dotenv from 'dotenv';

// Database Connection 
import connectDB from './config/db.js';
dotenv.config({path: './config/.env'});
connectDB();

const app = express();
const port = process.env.PORT;

import goalRoute from './routes/goalRoutes.js';
import {errorHandler} from './middleware/errorMiddleware.js'
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/goals', goalRoute);

// To overwrite express's default error messages 
app.use(errorHandler)





app.listen(port, () => console.log(`Server is upto ${port}`))