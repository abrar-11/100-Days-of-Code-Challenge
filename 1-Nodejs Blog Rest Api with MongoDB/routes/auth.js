const User = require("../models/User");

const router = require("express").Router();
const bcrypt = require("bcrypt");

// ===========🔵 Register New User 🔵===============

router.post("/register", async (req, res) => {
   console.log("hitted");
   try {
      const saltRounds = 10;
      const hashed_password = await bcrypt.hash(req.body.password, saltRounds);

      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashed_password,
      });

      const user = await newUser.save();
      res.status(200).json(user);
   } catch (err) {
      res.status(500).json(err);
   }
});

// ===========🔵 Login User 🔵===============

router.post("/login", async (req, res) => {
   try {
      console.log(req.body);
      const user = await User.findOne({ username: req.body.username });
      console.log("User: ", user);

      if (!user) {
         return res.status(400).json("Sorry Wrong username .. ");
      }

      const passwordValidate = await bcrypt.compare(
         req.body.password,
         user.password
      );

      if (!passwordValidate) {
         return res.status(400).json("Sorry Wrong password .. ");
      }

      const { password, ...data } = user._doc;
      res.status(200).json(data);
   } catch (err) {
      //   console.log(err);
      res.status(500).json({ error: err });
   }
});

module.exports = router;
