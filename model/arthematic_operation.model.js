const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let arthematic_operations = new Schema({
  num1: { type: Number, required: true },
  num2: { type: Number, required: true },
  operation: { type: String, required: true, max: 12 },
  result: { type: Number },
});

//Export the model
module.exports = mongoose.model("userdb", arthematic_operations);
