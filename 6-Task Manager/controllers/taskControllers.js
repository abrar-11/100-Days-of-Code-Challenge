const Task = require("../model/Task_Schema");

// ======================================
// ========== Get All Task ==============
// ======================================



const getTasks = async (req, res) => {
   // console.log("get all task hitted..");

   const tasks = await Task.find();
   res.status(200).json({ tasks: tasks });
};



// ======================================
// ========== Create Task ===============
// ======================================

const createTask = async (req, res) => {
   // console.log("create task hitted..");

   const task = await Task.create(req.body);
   res.json({ task: task });
};

// ======================================
// ========== Get Single Task ===========
// ======================================


const getTaskbyId = async (req, res) => {
   // console.log("get  single task hitted..");

   const id = req.params.id;
   const task = await Task.find({ _id: id });
   res.json({ task: task });
};


// ======================================
// ========== Edit  Task ================
// ======================================



const editTask = async (req, res) => {
   // console.log("edit task hitted..");

   const { id: taskID } = req.params;

   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
   });

   if (!task) {
      return res.status(500).json({ status: "error", error: "Task not found" });
   }

   return res.status(200).json({ task });
};


// ======================================
// ========== Delete  Task ==============
// ======================================



const deleteTask = async (req, res) => {
   // console.log("delete task hitted..");

   const { id: taskID } = req.params;
   const task = await Task.findOneAndDelete({ _id: taskID });
   if (!task) {
      return res
         .status(500)
         .json({ status: "error", error: `Invalid Task Id : ${taskID}` });
   }
   res.status(200).json({ task });
};

module.exports = { getTasks, createTask, getTaskbyId, editTask, deleteTask };
