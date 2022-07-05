const express = require("express");
const app = express();
const port = 5000;

// Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/post");
const categoryRoutes = require("./routes/categories");

app.use(express.json());

// connected to Database ...
const connectDB = require("./database/db");

// Authentication Routes
app.use("/auth/api/", authRoutes);

// User Routes
app.use("/user/", userRoutes);

// Post Routes
app.use("/post/", postRoutes);
// Post Routes
app.use("/category/", categoryRoutes);

connectDB()
   .then(() => {
      app.listen(port, () =>
         console.log(
            "Database Connected Successfully. server is listing on Port: ",
            port
         )
      );
   })
   .catch((err) => console.log("Server Failed . No connection to Database  ",err.message));
