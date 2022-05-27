const express = require("express");
require("dotenv").config();
const app = express();
const ErrorMiddleware = require("./Middlewares/error");

const cors = require("cors");

app.use(express.json());
app.use(cors());

//Database
const database = require("./Database/Database");
database();

const PORT = process.env.PORT || 8000;


// Importing Routes
const itemRoute = require("./Routes/itemsRoute");
const userRoute = require("./Routes/userRoute");

//calling routes
app.use("/api/r1", itemRoute);
app.use("/api/r1", userRoute);


app.get("/", (req, res) => {
  console.log("Server is running");
});

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
