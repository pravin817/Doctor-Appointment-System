const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

// Configure the dotenv
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "The server running",
  });
});

// get the port form dotenv
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(
    `The server is running in ${process.env.NODE_MODE} mode on port : ${PORT}`
      .bgCyan.white
  );
});
