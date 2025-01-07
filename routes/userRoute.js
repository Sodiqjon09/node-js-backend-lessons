const { Router } = require("express");
const userRoute = Router();

const {
  RegisterUser,
  getUsers,
  getUserById,
  updateUser,
  DeleteUser,
} = require("../controllers/user.controller");

userRoute.post("/registerUser", RegisterUser);
userRoute.get("/getUsers", getUsers);
userRoute.get("/getUserById/:id", getUserById);
userRoute.put("/updateUser/:id", updateUser);
userRoute.delete("/DeleteUser/:id", DeleteUser);

module.exports = { userRoute };
