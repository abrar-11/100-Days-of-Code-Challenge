const express = require("express");
const router = express.Router();

const authProtection = require("../middleware/auth")

const {
   getGoals,
   setGoal,
   updateGoal,
   deleteGoal,
} = require("../controllers/goalController");

router.get("/",authProtection, getGoals).post("/", authProtection,setGoal);

router.put("/:id", authProtection,updateGoal).delete("/:id", authProtection,deleteGoal);

module.exports = router;
