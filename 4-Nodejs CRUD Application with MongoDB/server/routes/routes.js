const router = require("express").Router();
const controllers = require("../controllers/controller");
const services = require("../services/render")

// Page Route
router.get("/", services.home);


// ==========Api Routes==========

// Create Employee
router.post("/api/employee", controllers.registerEmployee);

// View Employees
router.get("/api/getemployee", controllers.getEmployees);

// Update Employee
router.put("/api/update/:id", controllers.updateEmployee);


// Delete Employee
router.delete("/api/delete/:id", controllers.deleteEmployee);




module.exports = router;
