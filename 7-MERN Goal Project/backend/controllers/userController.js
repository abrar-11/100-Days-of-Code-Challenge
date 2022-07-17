const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
   const { name, email, password } = req.body;

   if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Provide Details");
   }

   //   === === Checcking wether user already exists or not === ===z
   const isUserExist = await User.findOne({ email: email });
   if (isUserExist) {
      res.status(400);
      throw new Error("User with the provided email already exists");
   }

   //   === === Password Hashing === ===

   const saltRounds = 10;
   const hashed_password = await bcrypt.hash(password, saltRounds);

   const user = await User.create({
      name,
      email,
      password: hashed_password,
   });

   if (user) {
      res.status(201).json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateJwtToken(user._id),
      });
   } else {
      res.status(400);
      throw new Error("Invalid User data..");
   }
});

const loginUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      res.status(400);
      throw new Error("Please Provide email and password");
   }

   const user = await User.findOne({ email });

   if (!user) {
      res.status(400);
      throw new Error("Invalid Email");
   }

   const isPasswordMatch = await bcrypt.compare(password, user.password);

   if (user && isPasswordMatch) {
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         token: generateJwtToken(user._id),
      });
   } else {
      res.status(400);
      throw new Error("Invalid Credentials..");
   }
});

const getMe = async (req, res) => {
   const { _id, name, email } = req.user;
   res.json({
      _id,
      name,
      email,
   });
}; 

const generateJwtToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
};

module.exports = { registerUser, loginUser, getMe };
