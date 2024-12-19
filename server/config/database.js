// const mongoose = require("mongoose");
// require("dotenv").config();

// const { MONGODB_URL } = process.env;

// exports.connect = () => {
// 	mongoose
// 		.connect(process.env.MONGODB_URL)
// 		.then(() => console.log(`DB Connection Success`))
// 		.catch((err) => {
// 			console.log(`DB Connection Failed`);
// 			console.log(err);
// 			process.exit(1);
// 		});
// };

const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGODB_URL;
    
    if (!mongoURL) {
      console.error('MONGODB_URL is not defined in .env file');
      process.exit(1);
    }

    console.log('Attempting to connect to:', mongoURL);
    
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Detailed MongoDB connection error:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;