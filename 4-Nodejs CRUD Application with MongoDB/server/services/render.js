// Home Page Route
const axios = require("axios");

const home = async (req, res) => {
   axios
      .get("http://localhost:5000/api/getemployee")
      .then((response) => {
         return res.render("index", { employee: response.data.data });
      })
      .catch((err) =>{
        console.log("error: ", err);
        res.render("index", { employee: [] })
      });
};

module.exports = { home };

// Update Employee Route
