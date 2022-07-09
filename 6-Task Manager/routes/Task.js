const express = require("express");
const router = express.Router();

const controller = require('../controllers/taskControllers')

//=======  Get All Tasks =======

router.get("/tasks",controller.getTasks);

//======= Create  Task =======

router.post("/tasks",controller.createTask );

//======= Get Single Task =======

router.get("/tasks/:id",controller.getTaskbyId);

//======= Edit  Task =======

router.patch("/tasks/:id",controller.editTask);

// ======= Delete  Task =======

router.delete("/tasks/:id",controller.deleteTask);






module.exports = router;
