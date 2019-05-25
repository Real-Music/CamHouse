const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle Cors Error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST,PATCH,DELETE,GET");
    res.status(200).json({});
  }
  next();
});

// Routes goes here
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to CamHome"
  });
});

// 404 Errors
app.use(function(req, res, next) {
  return res
    .status(404)
    .json({ message: "404 Route" + req.url + "Page Not found." });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).json({ error: err });
});

module.exports = app;
