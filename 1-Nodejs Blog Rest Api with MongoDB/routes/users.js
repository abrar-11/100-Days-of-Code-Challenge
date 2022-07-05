const User = require("../models/User");
const Post = require("../models/Post");

const router = require("express").Router();
const bcrypt = require("bcrypt");

// ===========🔵 Update  User 🔵===============

router.put("/:id", async (req, res) => {
   if (req.body.userId === req.params.id) {
      // if user updated their password also

      if (req.body.password) {
         const saltRounds = 10;
         const hashed_password = await bcrypt.hash(
            req.body.password,
            saltRounds
         );

         req.body.passowrd = hashed_password;
      }

      try {
         const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
         });
         const { password, ...data } = updatedUser._doc;
         res.status(200).json(data);
      } catch (err) {
         res.status(401).json({ error: err });
      }
   } else {
      res.status(401).json({
         msg: "Sorry you can only update your information.",
      });
   }
});

// ===========🔵 Delete User 🔵===============

router.delete("/:id", async (req, res) => {
   if (req.body.userId === req.params.id) {
      try {
         const user = await User.findById(req.params.id);
         try {
            // Deleteing All Post of That Particular User if have any
            await Post.deleteMany({ username: user.username });

            await User.findByIdAndDelete(req.params.id);

            res.status(200).json({ success: true });
         } catch (err) {
            console.log("first Catch", err);
            res.status(500).json({ error: err });
         }
      } catch (err) {
         console.log("second Catch", err);
         res.status(401).json({ error: err });
      }
   } else {
      res.status(401).json({
         msg: "Sorry you can only Delete your information.",
      });
   }
});

//Get User Details

router.get("/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      const { password, ...data } = user._doc;
      res.status(200).json({ success: true, data: data });
   } catch (err) {
      console.log("second Catch", err);
      res.status(401).json({ error: "No User Found .." });
   }
});

module.exports = router;
