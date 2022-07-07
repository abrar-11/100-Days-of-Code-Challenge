const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const jwt_secret = process.env.JWT_SECRET_KEY;

const registerUser = async (req, res) => {
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
 }





 const updateUser = async (req, res) => {
    const token = req.body.token
  
    
    try{
        const user = jwt.verify(token,jwt_secret);
        const saltRounds = 10;
        const password = await bcrypt.hash(req.body.new_password, saltRounds);
        const id =user.id
        await User.updateOne({id},{$set:{password}})
        
       
        res.status(200).json({status: 'success',msg:"password updated successfully"})
    }
  catch (err) {
       res.status(500).json({ status:'failed' ,error: err.message });
    }
 };








 const loginUser = async (req, res) => {
    const { username, password } = req.body;
 
    try {
       const user = await User.findOne({ username }).lean();
 
       if (!user) {
          return res.json({ status: "error", message: "Invalid Credentials" });
       }
 
       const validate = await bcrypt.compare(password,user.password );
 
       if (!validate) {
          return res.json({ status: "error", message: "Invalid Password" });
       }
 
       const token = jwt.sign(
          {
             id: user._id,
             username: user.username,
          },
          jwt_secret
       );
 
       return res.status(200).json({status:'success',data:token})
 
    } catch (err) {
       res.status(500).json({ error: err.message });
    }
 };


 
 module.exports = {registerUser,loginUser,updateUser}