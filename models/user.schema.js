const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: { type: String, require: true, unique: true, trim: true },
  password: { type: String, require: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  brithday: { type: String },
  gender: { type: String },
  address : { type: String, default: "" },
  phone: { type: String, default: "" },
  car_id: { type: String },
  house_id: { type: String },
  edu_id: { type: String },
});

const User = model("user", userSchema);
module.exports = { User };
