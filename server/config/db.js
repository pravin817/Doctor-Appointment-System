const mongoose = require("mongoose");
const colors = require("colors");

// Function for the connecting with Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `MongoDB connected successfully, ${mongoose.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log(`MongoDB server issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
