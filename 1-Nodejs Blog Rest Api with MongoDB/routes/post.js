const router = require("express").Router();

// const User = require("../models/User");

const Post = require("../models/Post");

// ===========🔵 Create  Post 🔵===============

router.post("/create", async (req, res) => {
   const post = new Post(req.body);

   try {
      const savedPost = await post.save();
      res.status(200).json(savedPost);
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
});

// ===========🔵 Update  Post 🔵===============

router.put("/:id", async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      console.log("POst ", post, req.body);
      if (req.body.author === post.author) {
         try {
            const updatedPost = await Post.findByIdAndUpdate(
               req.params.id,
               {
                  $set: req.body,
               },
               { new: true }
            );

            res.status(200).json({ success: true, data: updatedPost });
         } catch (err) {
            res.status(500).json({ error: err.message });
         }
      } else {
         res.status(401).json({
            msg: "Sorry you can only Update your Post.",
         });
      }
   } catch (err) {
      console.log(err);
      res.status(401).json({ error: err.message });
   }
});

module.exports = router;
