const mongoose = require("mongoose");

const connectDB = (connection) => {
   return mongoose.connect(connection);
};

module.exports = connectDB
