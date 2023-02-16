const mongoose = require("mongoose");
const ResourceSchema = new mongoose.Schema({
  name: String,
  qty: Number,
});

mongoose.model("Resources", ResourceSchema);
