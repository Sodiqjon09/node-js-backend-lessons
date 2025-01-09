const { Router } = require("express");
const carRoute = Router();

const {
  RegisterCar,
  getCars,
  carUserById,
  updateCar,
  deleteUser,
} = require("../controllers/car.controller");

carRoute.post("/registerCar", RegisterCar);
carRoute.get("/getCars", getCars);
carRoute.get("/carUserById/:id", carUserById);
carRoute.put("/updateCar/:id", updateCar);
carRoute.delete("/deleteUser/:id", deleteUser);

module.exports = { carRoute };
