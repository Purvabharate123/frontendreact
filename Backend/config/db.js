require('dotenv').config();  // Make sure dotenv is loaded at the start

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   ///console.log('MongoDB URI:', process.env.MONGO_URI); // Debugging step

    // Connect to MongoDB without the deprecated options
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process if the connection fails
  }
};

connectDB();
module.exports = mongoose;

