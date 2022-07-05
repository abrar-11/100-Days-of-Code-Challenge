const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const bcrypt = require("bcrypt");

// connected to Database ...
const connectDB = require("./database/db");

const User = require("./models/User");

app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "static/")));

app.post("/api/register", async (req, res) => {
   try {
      const saltRounds = 10;
      const hashed_password = await bcrypt.hash(req.body.password, saltRounds);
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      if (!username || typeof username !== "string") {
         return res.json({ status: "error", error: "Invalid Username" });
      }
      if (!password || typeof password !== "string") {
         return res.json({ status: "error", error: "Invalid Password" });
      }
      if (password.length < 5) {
         return res.json({ status: "error", error: "Password to small." });
      }

      const newUser = new User({
         username: username,
         email: email,
         password: hashed_password,
      });

      const user = await newUser.save();
      res.status(200).json({
         status: "success",
         msg: "User created successfully",
      });
   } catch (err) {
      if (err.code === 11000) {
         return res.json({ status: "error", error: "Duplicate Error" });
      }
      res.status(500).json({ error: err.message });
   }
});

connectDB()
   .then(() => {
      app.listen(port, () =>
         console.log(
            "Database Connected Successfully. server is listing on Port: ",
            port
         )
      );
   })
   .catch((err) =>
      console.log("Server Failed . No connection to Database  ", err.message)
   );
