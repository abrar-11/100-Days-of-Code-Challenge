const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "PLease Provide name"],
      },
      email: {
         type: String,
         required: [true, "PLease Provide email"],
         unique: true,
      },
      password: {
         type: String,
         required: [true, "PLease Provide password"],
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
