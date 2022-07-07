const router = require("express").Router();
const { registerUser,loginUser,updateUser } = require("../controllers/authController");


router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/update-password", updateUser);






module.exports = router;
