const mongoose = require("mongoose");

const connectDB = () => {
   try {
      const connection = mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected Successfully`.cyan.underline);
   } catch (err) {
      console.log("Error while connected to MongoDB".red.underline);
      process.exit(1);
   }
};

module.exports = connectDB;
