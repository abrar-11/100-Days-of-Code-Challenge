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

// Updtae Employees
router.put("/api/update/:id", controllers.updateEmployee);







module.exports = router;
