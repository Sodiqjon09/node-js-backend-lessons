const { Schema, model } = require("mongoose");

const eduSchema = new Schema({
  city: { type: "string", required: true },
  street: { type: "string", required: true },
  center_name: { type: "string", required: true },
  branch: { type: "string" },
  rating: { type: "string" },
});

const Edu = model("edu", eduSchema);
module.exports = { Edu };
