const asyncHandler = require("express-async-handler");
const Goal = require("../models/goals");
const User = require("../models/User");

// @description  🔴  Get Goals
// @route        🟠  GET /api/goals
// @access       🔵  Private

const getGoals = asyncHandler(async (req, res) => {
   const goals = await Goal.find({ user: req.user.id });

   res.status(200).json(goals);
});

// @description  🔴  Set Goals
// @route        🟠  POST /api/goals
// @access       🔵  Private

const setGoal = asyncHandler(async (req, res) => {
   console.log(req.body);
   if (!req.body.goal) {
      res.status(400);
      throw new Error("Text Field is required");
   }

   const goalData = req.body.goal;
   const goal = await Goal.create({ goal: goalData, user: req.user.id });

   res.status(200).json(goal);
});

// @description  🔴  Update Goal
// @route        🟠  PUT /api/goals/:id
// @access       🔵  Private

const updateGoal = asyncHandler(async (req, res) => {
   const id = req.params.id;
   const text = req.body.goal;
   if (!id) {
      throw new Error("Please Provide Id..");
   }
   if (!text) {
      throw new Error("Please Provide Updated Goal Text..");
   }

   const isGoal = await Goal.findById(id);

   if (!isGoal) {
      throw new Error("Please Provide valid Id");
   }

   console.log(isGoal);
   //  Authorizing Goal User
   const user = await User.findById(req.user.id);
   if (!user) {
      res.status(401);
      throw new Error("User not found..");
   }

   if (isGoal.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not Authorized..");
   }

   const goal = await Goal.findByIdAndUpdate(id, { goal: text }, { new: true });

   res.status(200).json(goal);
});

// @description  🔴  Delete Goal
// @route        🟠  GET /api/goals/:id
// @access       🔵  Private

const deleteGoal = asyncHandler(async (req, res) => {
   const id = req.params.id;

   if (!id) {
      throw new Error("Please Provide Id..");
   }

   const isGoal = await Goal.findById(id);

   if (!isGoal) {
      throw new Error("Please Provide valid Id");
   }

   //  Authorizing Goal User
   const user = await User.findById(req.user.id);
   if (!user) {
      res.status(401);
      throw new Error("User not found..");
   }

   if (isGoal.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not Authorized..");
   }

   const goal = await Goal.findByIdAndDelete(id);

   res.status(200).json({ id });
});

module.exports = {
   getGoals,
   setGoal,
   updateGoal,
   deleteGoal,
};
