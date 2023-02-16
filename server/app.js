const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/Resources.js");

const mongURI =
  "mongodb+srv://evplay:M7sNoQNCwqxA02NG@cluster0.9upbn3g.mongodb.net/?retryWrites=true&w=majority";

const Resources = mongoose.model("Resources");
mongoose.set("strictQuery", false);
mongoose.connect(mongURI);

mongoose.connection.on("connected", () => {
  console.log("Connect to Mongoose Successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Error Connecting to Mongoose ", err);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Nodejs");
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});
