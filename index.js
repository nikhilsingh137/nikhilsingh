const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const host = 5000;

const app = express();
app.use(express.static("css"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const comm = req.body.email;
  console.log(comm);
});

app.listen(host, function () {
  console.log("server running");
});
