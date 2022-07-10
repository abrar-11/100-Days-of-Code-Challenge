const asyncHandler = require("express-async-handler");

// @description  🔴  Get Goals
// @route        🟠  GET /api/goals
// @access       🔵  Private

const getGoals = asyncHandler(async (req, res) => {
   res.status(200).json({ message: "Get Goals :)" });
});

// @description  🔴  Set Goals
// @route        🟠  POST /api/goals
// @access       🔵  Private

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.goal){
        res.status(400)
        throw new Error ('Text Field is required')
    }
   res.status(200).json({ message: "Set Goal :)" });
});

// @description  🔴  Update Goal
// @route        🟠  PUT /api/goals/:id
// @access       🔵  Private

const updateGoal = asyncHandler(async (req, res) => {
   res.status(200).json({ message: "Update Goal :)" });
});

// @description  🔴  Delete Goal
// @route        🟠  GET /api/goals/:id
// @access       🔵  Private

const deleteGoal = asyncHandler(async (req, res) => {
   res.status(200).json({ message: "Delete Goal :)" });
});

module.exports = {
   getGoals,
   setGoal,
   updateGoal,
   deleteGoal,
};
