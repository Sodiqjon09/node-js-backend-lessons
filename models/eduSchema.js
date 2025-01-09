const { Schema, model } = require("mongoose");

const eduSchema = new Schema({
  city: { type: String, requider: true },
  street: { type: String, requider: true },
  center_name: { type: String, requider: true },
  branch: { type: String },
  rating: { type: String },
});

const Edu = model("edu", eduSchema);
module.exports = { Edu };
