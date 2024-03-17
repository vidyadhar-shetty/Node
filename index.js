const express = require("express");
const studentRoutes = require("../ExpressJS/routes/student.routes");
require("dotenv").config();
let app = express();

app.use(express.json());

//todo App Routes
app.use("/api/student", studentRoutes);

//! Page Not Found routes

app.use("*", (req, res, next) => {
  res.status(404).json({ error: true, message: "Page Not Found" });
});

let PORT = 
.env.DEVPORT;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("server is running on port number 3500");
});
