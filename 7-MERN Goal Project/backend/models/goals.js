const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "User",
      },
      goal: {
         type: String,
         required: [true, "Please Provide goal text"],
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
