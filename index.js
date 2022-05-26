const express = require("express");
require("dotenv").config();
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

const database = require("./Database/Database");
database();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
