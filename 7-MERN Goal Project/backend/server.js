const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { errorHandler } = require("./middleware/error");
const colors = require("colors");
const connectDB = require("./config/database");

// ======Importing Routes======
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 5000;

// ======Connecting to MongoDB======
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use("/api/goals", goalRoutes);

app.use("/api/user", userRoutes);


// Error MiddleWare
app.use(errorHandler);

app.listen(port, () => console.log(`server is listening on port ${port}`));
