const { Schema, model } = require("mongoose");

const carScheme = new Schema({
  title: { type: "String", require: true },
  model: { type: "String", require: true },
  description: { type: "String" },
  color: { type: "String", require: true },
  horsePower: { type: "String", require: true },
  carType: { type: "String", require: true },
  charging: { type: "String" },
  weight: { type: "String", require: true },
  gasoline: { type: "String", require: true },
  yearMachine: { type: "String", require: true },
  price: { type: "String", require: true },
});

const Car = model("car", carScheme);
module.exports = { Car };
