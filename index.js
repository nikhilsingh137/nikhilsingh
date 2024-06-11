const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(express.static("css"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this line to handle JSON data

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/test", (req, res) => {
  console.log("Test POST request received");
  console.log("Request body:", req.body); // Debugging statement
  res.send("Test route working");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
