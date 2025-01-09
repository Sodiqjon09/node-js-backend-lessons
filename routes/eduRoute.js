const { Router } = require("express");
const eduRoute = Router();

const {
  RegisterEdu,
  getUsersEdu,
  getUserByIdEdu,
  updateUserEdu,
  DeleteEdu,
} = require("../controllers/edu.controller");

eduRoute.post("/registerEdu", RegisterEdu);
eduRoute.get("/getUsersEdu", getUsersEdu);
eduRoute.get("/getUserByIdEdu/:id", getUserByIdEdu);
eduRoute.put("/updateUserEdu/:id", updateUserEdu);
eduRoute.delete("/DeleteEdu/:id", DeleteEdu);

module.exports = { eduRoute };
