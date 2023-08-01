import mongoose from 'mongoose';
import chalk from 'chalk';
import asyncHandler from 'express-async-handler';
const connectDB = asyncHandler(async(req, res) => {
    const conn = await mongoose.connect(process.env.MONGO_CONN);
    console.log(chalk.yellow(`mongoDB connected ${conn.connection.host}`));
});

export default connectDB;