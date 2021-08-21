const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const path = require('path');
const connectDB = require("./config/db");

dotenv.config();

connectDB()
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.use(express.static(path.join(__dirname, "/client/build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname), "/client/build","index.html");
})


app.listen(8800, () => {
  console.log("Backend server is running!");
});