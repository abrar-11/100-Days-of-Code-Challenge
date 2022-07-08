const Employee = require("../models/Employee");

const registerEmployee = async(req,res)=>{
   console.log(req.body);
    try {
      if(!req.body){
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
           phone:phone
        });
  
        const employee = await newEmployee.save();
        res.status(200).json({
           status: "success",
           msg: "Employee created successfully",
        });
     } catch (err) {
        if (err.code === 11000) {
           return res.json({ status: "error", error: "Duplicate Error" });
        }
        res.status(500).json({ error: err.message });
     }
}


// module.exports = {registerEmployee,loginEmployee,updateEmployee}
module.exports = {registerEmployee}