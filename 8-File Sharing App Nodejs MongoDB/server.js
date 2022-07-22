const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
require("dotenv").config();
const connectDB = require("./db/connect");
const multer = require("multer");
const File = require("./models/File");
const port = process.env.port || 5000;

const upload = multer({ dest: "uploads" });

app.use(express.json());
app.set("view engine", "ejs");

// Home Page Route
app.get("/", (req, res) => {
   res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
   const fileData = {
      path: req.file.path,
      originalName: req.file.originalname,
   };

   if (req.body.password != null && req.body.password != "") {
      const hashed_password = await bcrypt.hash(req.body.password, 10);
      fileData.password = hashed_password;
   }

   const file = await File.create(fileData);

   console.log(file);

   res.render("index", { link: `${req.headers.origin}/file/${file.id}` });
});

app.get("/file/:id", async (req, res) => {
   const id = req.params.id;

   try{
      const file = await File.findById(id);

      if (file.password != null) {
         if (req.body.password != null) {
            if (file.password === req.body.password) {
               res.download(file.path, file.originalName);
               file.donwloadCount++;
               await file.save();
            }
            else{
               res.status(500).json({ status: "error", message: "Invalid Password" });
            }
         } else {
            res.status(500).json({ status: "error", message: "Please Provide Password" });
         }
      } else {
         res.download(file.path, file.originalName);
         file.donwloadCount++;
         await file.save();
      }
   }
   catch(error){
      res.status(500).json({ status: "error", message: "File download failed.." });
   }

   
});

const startDB = async () => {
   try {
      await connectDB(process.env.MONGO_CONNECTION_STRING);

      app.listen(port, console.log(`Listening on port: ${port}`));
   } catch (error) {
      console.log(error);
   }
};

startDB();
