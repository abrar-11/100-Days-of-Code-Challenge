const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8080;

// Routes
const routes = require("./server/routes/routes");

// connected to Database ...
const connectDB = require("./server/database/db");

// Parse incoming request with urlencoded payload
app.use(express.urlencoded({ extended: true }));

// Adding Css
app.use("/css", express.static(path.join(__dirname, "assets/css")));

// Ejs Engine
app.set("view engine", "ejs");

// Loading routes
app.use("/", routes);

// Connecting to database

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
