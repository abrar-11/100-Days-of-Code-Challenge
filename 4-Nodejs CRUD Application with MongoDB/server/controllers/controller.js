const Employee = require("../models/Employee");

const registerEmployee = async (req, res) => {
   console.log(req.body);
   try {
      if (!req.body) {
         return res.json({ status: "error", error: "All Fields Required" });
      }

      const name = req.body.name;
      const email = req.body.email;
      const address = req.body.address;
      const phone = req.body.phone;

      if (!name || typeof name !== "string") {
         return res.json({ status: "error", error: "Invalid name" });
      }
      if (!email || typeof email !== "string") {
         return res.json({ status: "error", error: "Invalid email" });
      }
      if (!address) {
         return res.json({ status: "error", error: "Address Required." });
      }
      if (!phone) {
         return res.json({ status: "error", error: "Phone Number Required." });
      }

      const newEmployee = new Employee({
         name: name,
         email: email,
         address: address,
         phone: phone,
      });

      const employee = await newEmployee.save();
      res.status(200).json({
         status: "success",
         msg: "Employee created successfully",
      });
   } catch (err) {
      console.log(err);
      if (err.code === 11000) {
         return res.json({ status: "error", error: "Duplicate Error" });
      }
      res.status(500).json({ error: err.message });
   }
};

const getEmployees = async (req, res) => {
   try {
      if (req.query.id) {
         const id = req.query.id;
         const employee = await Employee.findById(id);

         if (employee) {
            return res.status(200).json({ status: "success", data: employee });
         } else {
            res.status(500).json({
               status: "error",
               error: "No Employee Found! ID is invalid",
            });
         }
      }

      const employees = await Employee.find();
      res.status(200).json({ status: "success", data: employees });
      // console.log(employees);
   } catch (err) {
      res.status(500).json({ status: "error", error: err.message });
   }
};

const updateEmployee = async (req, res) => {
   console.log(req.body);
   try {
      if (req.params.id) {
         const id = req.params.id;
         if (!req.body) {
            return res.json({ status: "error", error: "All Fields Required" });
         }

         const name = req.body.name;
         const email = req.body.email;
         const address = req.body.address;
         const phone = req.body.phone;

         if (!name || typeof name !== "string") {
            return res.json({ status: "error", error: "Invalid name" });
         }
         if (!email || typeof email !== "string") {
            return res.json({ status: "error", error: "Invalid email" });
         }
         if (!address) {
            return res.json({ status: "error", error: "Address Required." });
         }
         if (!phone) {
            return res.json({
               status: "error",
               error: "Phone Number Required.",
            });
         }

         const employee = await Employee.findByIdAndUpdate(id, {$set:req.body});
         res.status(200).json({
            status: "success",
            msg: "Employee Updated successfully",
         });
      }

      else{
         return res.json({ status: "error", error: "Employee ID is Required" });
      }
   } catch (err) {
      console.log(err);
      if (err.code === 11000) {
         return res.json({ status: "error", error: "Duplicate Error" });
      }
      res.status(500).json({ error: err.message });
   }
};

module.exports = { registerEmployee, getEmployees, updateEmployee };
