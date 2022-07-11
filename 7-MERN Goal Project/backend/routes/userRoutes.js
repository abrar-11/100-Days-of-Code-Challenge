const express = require("express");
const router = express.Router();
const authProtection = require("../middleware/auth");
const {
   registerUser,
   loginUser,
   getMe,
} = require("../controllers/userController");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/me", authProtection, getMe);

module.exports = router;
