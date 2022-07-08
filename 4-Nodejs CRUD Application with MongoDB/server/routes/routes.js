const router = require("express").Router();
const controllers = require("../controllers/controller");
const services = require("../services/render")

// Page Route
router.get("/", services.home);

// Create User Page Route
router.get("/add-employee", services.createEmployee);



// ==========Api Routes==========

// Create Employee
router.post("/api/employee", controllers.registerEmployee);

// View Employees
// router.post("/api/users", controllers.);

// Updtae Employees
// router.post("/update-employee", controllers.updateEmployee);






module.exports = router;
