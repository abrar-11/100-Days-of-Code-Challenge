const mongoose = require("mongoose");
const File = mongoose.Schema({
   path: {
      type: String,
      required: true,
   },
   originalName: {
      type: String,
      required: true,
   },
   password:{
      type:String,
      required: true,
      default:null,
   },
   donwloadCount: {
      type: Number,
      required: true,
      default: 0,
   },
});

module.exports = mongoose.model("File", File);
