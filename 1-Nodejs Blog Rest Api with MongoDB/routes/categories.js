const router = require("express").Router();

const category = require("../models/Category");

// ===========🔵 Create New Category 🔵===============

router.post("/", async (req, res) => {
   const cat = new category(req.body);
   try {
      const savedCategory = await cat.save();
      res.status(200).json(savedCategory);
   } catch (err) {
      res.status(500).json(err);
   }
});

module.exports = router;
