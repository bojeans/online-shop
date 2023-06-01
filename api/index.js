const cors = require("cors");
const express = require("express");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 8000;

const app = express();

// Middlewares here
app.use(express.json());
app.use(cors());

// Routes here
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
