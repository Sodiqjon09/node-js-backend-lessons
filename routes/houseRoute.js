const { Router } = require("express");
const houseRoute = Router();

const {
  RegisterHouse,
  getUsersHouse,
  getUserByIdHouse,
  updateUserHouse,
  DeleteHouse,
} = require("../controllers/house.controller");

houseRoute.post("/registerHouse", RegisterHouse);
houseRoute.get("/getUsersHouse", getUsersHouse);
houseRoute.get("/getUserByIdHouse/:id", getUserByIdHouse);
houseRoute.put("/updateUserHouse/:id", updateUserHouse);
houseRoute.delete("/DeleteHouse/:id", DeleteHouse);

module.exports = { houseRoute };
