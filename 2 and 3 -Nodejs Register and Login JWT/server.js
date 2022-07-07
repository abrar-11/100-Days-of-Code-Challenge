const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const authRoutes = require('./routes/auth')

// connected to Database ...
const connectDB = require("./database/db");



app.use(express.json());

app.use("/", express.static(path.join(__dirname, "static/")));

app.use("/api/",authRoutes)


connectDB()
   .then(() => {
      app.listen(port, () =>
         console.log(
            "Database Connected Successfully. server is listing on Port: ",
            port
         )
      );
   })
   .catch((err) =>
      console.log("Server Failed . No connection to Database  ", err.message)
   );
