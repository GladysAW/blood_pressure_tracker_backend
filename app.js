const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./models/entryModel");

//!Routes
const entriesRouter = require("./routes/entriesRouter");

//! INIT
const app = express();

//! MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/entries", entriesRouter);

//! CONNECT TO DB
const { DB_PROTOCOL, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_QUERIES } =
  process.env;

const URI = `${DB_PROTOCOL}${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?${DB_QUERIES}`;

mongoose.set("strictQuery", false);
mongoose.connect(URI, {
  useNewUrlParser: true,
  useunifiedTopology: true,
});

mongoose.connection
  .once("error", console.error)
  .once("open", () => console.log("Database connection established"));

module.exports = app;
